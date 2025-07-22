const express = require('express');
const router = express.Router();
const Categories = require('../models/Category.js');

//GET /api/categories (get user's categories)
router.get('/', async (req, res) => {});

router.get('/:id', async (req, res) => {});
//POST /api/categories (create category)
router.post('/', async (req, res) => {});
//PUT /api/categories/:id (update category)
router.put('/:id', async (req, res) => {});
//DELETE /api/categories/:id (delete category)
router.delete('/:id', async (req, res) => {});


module.exports = router;
