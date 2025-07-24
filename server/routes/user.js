const express = require('express');
const router = express.Router();
const User = require('../models/User.js');


//GET api/users (get all users)
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET (get single user by id)
router.get('/:id', async (req, res) => {});

//POST (Create User)
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    tier: req.body.tier,
    currency: req.body.currency
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});

module.exports = router;
