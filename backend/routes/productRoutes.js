const express = require('express');
const router  = express.Router();
const {
  getProducts, getProduct, createProduct, updateProduct, deleteProduct, uploadImages,
} = require('../controllers/productController');
const { protect } = require('../middleware/auth');

router.get('/',    getProducts);                                     // Public
router.get('/:id', getProduct);                                     // Public
router.post('/',   protect, uploadImages, createProduct);           // Admin
router.put('/:id', protect, uploadImages, updateProduct);           // Admin
router.delete('/:id', protect, deleteProduct);                      // Admin

module.exports = router;
