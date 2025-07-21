const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction.js');

//GET /api/transactions (get user's transactions)
router.get('/', async (req, res) => { 
  try {
    const allTransactions = await Transaction.find();
    res.json(allTransactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET /api/transactions (get single transaction)
router.get('/:id', async (req, res) => {});

//POST /api/transactions (create transaction)
router.post('/', async (req, res) => {
  const transaction = new Transaction({
//    user: req.body.user,
    type: req.body.type,
    paymentMethod: req.body.paymentMethod,
    amount: req.body.amount,
    category: req.body.category,
    description: req.body.description
  });
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//PUT /api/transactions/:id (update transaction)
router.put('/:id', async (req, res) => {});

//DELETE /api/transactions/:id (delete transaction)
router.delete('/:id', async (req, res) => {});


module.exports = router;
