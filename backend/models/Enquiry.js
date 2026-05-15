const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^[+]?[\d\s\-()]{7,20}$/, 'Please enter a valid phone number'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [150, 'Company name cannot exceed 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message / requirement is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
    notes: {
      type: String,
      trim: true,
    },
    ip: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', EnquirySchema);
