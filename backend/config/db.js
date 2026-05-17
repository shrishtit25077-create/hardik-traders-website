const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✓ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`✗ MongoDB connection error: ${error.message}`);
    if (process.env.NODE_ENV === 'production') process.exit(1);
    // In development, log the error but keep the server alive
  }
};

module.exports = connectDB;
