const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: [expense, income],
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'credit_card', 'debit_card', 'bank_transfer', 'check', 'other'],
    default: 'debit_card',
  },
  amount: {
    type: Number,
    min: 0.01,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: 200
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Transaction', transactionSchema);
