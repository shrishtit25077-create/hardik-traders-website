const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });

// @route POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase() }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
    if (!admin.isActive) {
      return res.status(403).json({ success: false, message: 'Account is deactivated.' });
    }

    admin.lastLogin = new Date();
    await admin.save({ validateBeforeSave: false });

    const token = signToken(admin._id);
    res.json({
      success: true,
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
    });
  } catch {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route GET /api/auth/me
exports.getMe = async (req, res) => {
  res.json({
    success: true,
    admin: { id: req.admin._id, name: req.admin.name, email: req.admin.email, role: req.admin.role },
  });
};

// @route POST /api/auth/seed  (run ONCE to create first admin)
exports.seedAdmin = async (req, res) => {
  try {
    const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (exists) return res.json({ success: false, message: 'Admin already exists.' });
    const admin = await Admin.create({
      name: 'Hardik Traders Admin',
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      role: 'superadmin',
    });
    res.status(201).json({ success: true, message: 'Admin seeded.', email: admin.email });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
