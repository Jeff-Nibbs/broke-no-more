const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
//  user: {
//    type: mongoose.Schema.Types.ObjectId,
//    ref: 'User',
//    required: true,
//  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  type: {
    type: String,
    enum: ['expense', 'income'],
    required: true,
  },
  color: {
    type: String,
    default: '#3B82F6',
    match: /^#[0-9A-F]{6}$/i
  },
  icon: {
    type: String,
    default: 'folder'
  },
  isDefault: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
});

categorySchema.index({ user: 1, name: 1, type: 1 }, { unique: true });

module.exports = mongoose.model('Category', categorySchema);
