const express = require('express');
const router = express.Router();
const Category = require('../models/Category.js');

//GET /api/categories (get user's categories)
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {});
//POST /api/categories (create category)
router.post('/', async (req, res) => {
  const category = new Category({
//    user: req.body.user,
    name: req.body.name,
    type: req.body.type,
    color: req.body.color,
    icon: req.body.icon,
    isDefault: req.body.isDefault,
  });
  try {
    const newCategory = await category.save();
    res.status(201).json({newCategory});
  } catch (err){
    res.status(400).json({ message: err.message });
  }
});
//PUT /api/categories/:id (update category)
router.put('/:id', async (req, res) => {});
//DELETE /api/categories/:id (delete category)
router.delete('/:id', async (req, res) => {});


module.exports = router;
