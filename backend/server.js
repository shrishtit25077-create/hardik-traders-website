require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const helmet       = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit    = require('express-rate-limit');
const path         = require('path');
const connectDB    = require('./config/db');

// ─── Connect DB ───
connectDB();

const app = express();

// ─── Security Headers ───
app.use(helmet());

// ─── CORS ───
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));

// ─── Rate Limiting ───
const globalLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200, message: 'Too many requests, please try again later.' });
const enquiryLimiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 10, message: 'Too many enquiries submitted. Please wait before trying again.' });
app.use('/api/', globalLimiter);
app.use('/api/enquiries', enquiryLimiter);

// ─── Body Parsing ───
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ─── Sanitize inputs ───
app.use(mongoSanitize());

// ─── Static uploads ───
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ─── Routes ───
app.use('/api/auth',      require('./routes/authRoutes'));
app.use('/api/enquiries', require('./routes/enquiryRoutes'));
app.use('/api/products',  require('./routes/productRoutes'));

// ─── Health check ───
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// ─── 404 ───
app.use((req, res) => res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` }));

// ─── Global error handler ───
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Server error.' : err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✓ Server running on port ${PORT} [${process.env.NODE_ENV}]`));
