const express = require('express');
const router  = express.Router();
const {
  submitEnquiry, getEnquiries, updateStatus, deleteEnquiry, exportCSV,
} = require('../controllers/enquiryController');
const { protect } = require('../middleware/auth');

router.post('/',               submitEnquiry);           // Public
router.get('/export', protect, exportCSV);               // Admin CSV
router.get('/',        protect, getEnquiries);            // Admin list
router.patch('/:id/status', protect, updateStatus);      // Admin update
router.delete('/:id',  protect, deleteEnquiry);          // Admin delete

module.exports = router;
