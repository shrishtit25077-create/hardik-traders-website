const Enquiry = require('../models/Enquiry');
const { sendOwnerNotification, sendCustomerConfirmation } = require('../services/emailService');
const { sendWhatsAppAlert } = require('../services/whatsappService');

// @route  POST /api/enquiries  — Public
exports.submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and product requirement are required.',
      });
    }

    // 1. Save to MongoDB (always — never lose a lead)
    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company?.trim() || '',
      message: message.trim(),
      ip: req.ip,
    });

    // 2. Fire notifications in background (non-blocking, never fail the response)
    Promise.allSettled([
      sendOwnerNotification(enquiry),
      sendCustomerConfirmation(enquiry),
      sendWhatsAppAlert(enquiry),
    ]).then(results => {
      results.forEach((r, i) => {
        const labels = ['owner-email', 'customer-email', 'whatsapp'];
        if (r.status === 'rejected') console.error(`[Notify] ${labels[i]} failed:`, r.reason?.message);
      });
    });

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. Our team will contact you within 24 hours.',
      id: enquiry._id,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('[Enquiry] Submit error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again or call us directly.' });
  }
};

// @route  GET /api/enquiries  — Admin (protected)
exports.getEnquiries = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (status && status !== 'all') filter.status = status;
    if (search) {
      filter.$or = [
        { name:    { $regex: search, $options: 'i' } },
        { email:   { $regex: search, $options: 'i' } },
        { phone:   { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }
    const total    = await Enquiry.countDocuments(filter);
    const newCount = await Enquiry.countDocuments({ status: 'new' });
    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .lean();

    res.json({ success: true, total, newCount, page: Number(page), data: enquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route  PATCH /api/enquiries/:id/status  — Admin
exports.updateStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status, ...(notes !== undefined && { notes }) },
      { new: true, runValidators: true }
    );
    if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, data: enquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route  DELETE /api/enquiries/:id  — Admin
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, message: 'Enquiry deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route  GET /api/enquiries/export  — Admin CSV export
exports.exportCSV = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    const header = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Requirement', 'Status', 'Notes', 'Date'];
    const rows = enquiries.map(e => [
      e._id, e.name, e.email, e.phone,
      e.company || '',
      `"${(e.message || '').replace(/"/g, '""')}"`,
      e.status,
      `"${(e.notes || '').replace(/"/g, '""')}"`,
      new Date(e.createdAt).toLocaleString('en-IN'),
    ]);
    const csv = [header, ...rows].map(r => r.join(',')).join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="hardik-traders-leads-${Date.now()}.csv"`);
    res.send(csv);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Export failed.' });
  }
};
