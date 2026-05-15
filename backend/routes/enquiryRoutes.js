const express = require('express');
const router  = express.Router();
const { submitEnquiry, getEnquiries, updateStatus, deleteEnquiry } = require('../controllers/enquiryController');
const { protect } = require('../middleware/auth');

router.post('/',              submitEnquiry);                // Public
router.get('/',   protect,    getEnquiries);                 // Admin
router.patch('/:id/status', protect, updateStatus);          // Admin
router.delete('/:id',       protect, deleteEnquiry);         // Admin

module.exports = router;
