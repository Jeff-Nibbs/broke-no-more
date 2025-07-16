const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  tier: {
    type: String,
    required: true,
    default: 'Free',
    enum: ['Free', 'Basic', 'Pro', 'Ballin']
  },
  currency: {
    type: String,
    required: true,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'INR', 'JPY']
  },

}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
