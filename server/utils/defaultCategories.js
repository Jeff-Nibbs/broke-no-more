const defaultCategories = [
  // Income categories
  { name: 'Salary', type: 'income', color: '#10B981', icon: 'dollar-sign' },
  { name: 'Freelance', type: 'income', color: '#3B82F6', icon: 'briefcase' },
  { name: 'Investment', type: 'income', color: '#8B5CF6', icon: 'trending-up' },
  { name: 'Other Income', type: 'income', color: '#06B6D4', icon: 'plus-circle' },
  
  // Expense categories
  { name: 'Food', type: 'expense', color: '#EF4444', icon: 'utensils' },
  { name: 'Transportation', type: 'expense', color: '#F59E0B', icon: 'car' },
  { name: 'Housing', type: 'expense', color: '#84CC16', icon: 'home' },
  { name: 'Entertainment', type: 'expense', color: '#EC4899', icon: 'music' },
  { name: 'Healthcare', type: 'expense', color: '#14B8A6', icon: 'heart' },
  { name: 'Shopping', type: 'expense', color: '#F97316', icon: 'shopping-bag' },
  { name: 'Education', type: 'expense', color: '#8B5CF6', icon: 'book' },
  { name: 'Utilities', type: 'expense', color: '#6B7280', icon: 'zap' },
  { name: 'Other Expenses', type: 'expense', color: '#9CA3AF', icon: 'more-horizontal' }
];

const createDefaultCategories = async (userId) => {
  const Category = require('../models/Category');
  
  const categories = defaultCategories.map(cat => ({
    ...cat,
    user: userId,
    isDefault: true
  }));
  
  try {
    await Category.insertMany(categories);
    console.log('Default categories created for user:', userId);
  } catch (error) {
    console.error('Error creating default categories:', error);
  }
};

module.exports = { defaultCategories, createDefaultCategories };
