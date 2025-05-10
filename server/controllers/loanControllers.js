const Loan = require('./models/Loan');
const User = require('./models/User');

// Create a new loan (borrower)
exports.createLoan = async (req, res) => {
  const { amount, durationMonths, interestRate } = req.body;
  const userId = req.user.id;

  try {
    const loan = new Loan({
      userId,
      amount,
      durationMonths,
      interestRate
    });

    await loan.save();
    res.status(201).json({ msg: 'Loan request submitted', loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all loans (admin or officer)
exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('userId', 'name email');
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get my loans (borrower)
exports.getMyLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.id });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve or reject a loan (admin or officer)
exports.updateLoanStatus = async (req, res) => {
  const { status, remarks } = req.body;
  const { id } = req.params;

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const loan = await Loan.findByIdAndUpdate(
      id,
      { status, remarks },
      { new: true }
    );

    if (!loan) return res.status(404).json({ error: 'Loan not found' });

    res.json({ msg: 'Loan updated', loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
