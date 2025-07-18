const express = require('express');
const router = express.Router();

// server/routes/transactions.js
//GET /api/transactions (get user's transactions)
//POST /api/transactions (create transaction)
//PUT /api/transactions/:id (update transaction)
//DELETE /api/transactions/:id (delete transaction)
//GET /api/transactions/stats (get spending statistics)


router.get('/', async (req, res) => {
  res.json({ test: 'you did it' });
});

module.exports = router;
