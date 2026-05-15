const Enquiry = require('../models/Enquiry');

// @route POST /api/enquiries
// @access Public
exports.submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Basic field check
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone, and message are required.',
      });
    }

    const enquiry = await Enquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company?.trim(),
      message: message.trim(),
      ip: req.ip,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your enquiry has been received. We will contact you within 24 hours.',
      data: { id: enquiry._id },
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

// @route GET /api/enquiries (Admin)
exports.getEnquiries = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (search) {
      filter.$or = [
        { name:    { $regex: search, $options: 'i' } },
        { email:   { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ];
    }
    const total = await Enquiry.countDocuments(filter);
    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ success: true, total, page: Number(page), data: enquiries });
  } catch {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route PATCH /api/enquiries/:id/status (Admin)
exports.updateStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status, ...(notes && { notes }) },
      { new: true, runValidators: true }
    );
    if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, data: enquiry });
  } catch {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route DELETE /api/enquiries/:id (Admin)
exports.deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) return res.status(404).json({ success: false, message: 'Enquiry not found.' });
    res.json({ success: true, message: 'Enquiry deleted.' });
  } catch {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};
