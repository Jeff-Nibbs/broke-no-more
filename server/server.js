const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const transaction = require('./routes/transactions.js');
const category = require('./routes/categories.js');
const user = require('./routes/user.js');

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend connected poop!' });
});

app.use('/api/transaction', transaction);
app.use('/api/category', category);
app.use('/api/user', user);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
