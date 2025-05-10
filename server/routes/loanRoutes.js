const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

// Borrower routes
router.post('/', protect, authorizeRoles('borrower'), loanController.createLoan);
router.get('/my', protect, authorizeRoles('borrower'), loanController.getMyLoans);

// Admin or officer routes
router.get('/', protect, authorizeRoles('admin', 'officer'), loanController.getAllLoans);
router.put('/:id', protect, authorizeRoles('admin', 'officer'), loanController.updateLoanStatus);

module.exports = router;
