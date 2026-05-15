const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename:    (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `product-${unique}${path.extname(file.originalname)}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed.'), false);
  },
});
exports.uploadImages = upload.array('images', 6);

// @route GET /api/products?category=&featured=&page=&limit=
exports.getProducts = async (req, res) => {
  try {
    const { category, featured, page = 1, limit = 20, search } = req.query;
    const filter = { isActive: true };
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === 'true';
    if (search) filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { brand: { $regex: search, $options: 'i' } },
      { tags:  { $regex: search, $options: 'i' } },
    ];
    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort({ featured: -1, sortOrder: 1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json({ success: true, total, data: products });
  } catch { res.status(500).json({ success: false, message: 'Server error.' }); }
};

// @route GET /api/products/:id
exports.getProduct = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ success: false, message: 'Product not found.' });
    res.json({ success: true, data: p });
  } catch { res.status(500).json({ success: false, message: 'Server error.' }); }
};

// @route POST /api/products (Admin)
exports.createProduct = async (req, res) => {
  try {
    const images = req.files?.map(f => `/uploads/${f.filename}`) || [];
    const product = await Product.create({ ...req.body, images });
    res.status(201).json({ success: true, data: product });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const msgs = Object.values(e.errors).map(err => err.message);
      return res.status(400).json({ success: false, message: msgs.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error.' });
  }
};

// @route PUT /api/products/:id (Admin)
exports.updateProduct = async (req, res) => {
  try {
    const update = { ...req.body };
    if (req.files?.length) update.images = req.files.map(f => `/uploads/${f.filename}`);
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found.' });
    res.json({ success: true, data: product });
  } catch { res.status(500).json({ success: false, message: 'Server error.' }); }
};

// @route DELETE /api/products/:id (Admin)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found.' });
    res.json({ success: true, message: 'Product deleted.' });
  } catch { res.status(500).json({ success: false, message: 'Server error.' }); }
};
