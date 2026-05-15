const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    slug:        { type: String, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: [
        'Power Tools', 'Hand Tools', 'Welding Equipment',
        'Bearings', 'Fasteners', 'Hydraulic Tools', 'Measuring Instruments',
        'Air Tools', 'Abrasives', 'Safety Equipment',
      ],
    },
    brand:     { type: String, trim: true },
    images:    [{ type: String }],          // file paths / URLs
    sku:       { type: String, trim: true },
    inStock:   { type: Boolean, default: true },
    featured:  { type: Boolean, default: false },
    sortOrder: { type: Number, default: 0 },
    tags:      [String],
    isActive:  { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Auto-generate slug
ProductSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
