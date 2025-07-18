const express = require('express');
const router = express.Router();


//GET /api/transactions (get user's transactions)
router.get('/', async (req, res) => {});

//GET /api/transactions (get single transaction)
router.get('/:id', async (req, res) => {});

//POST /api/transactions (create transaction)
router.post('/', async (req, res) => {});

//PUT /api/transactions/:id (update transaction)
router.put('/:id', async (req, res) => {});

//DELETE /api/transactions/:id (delete transaction)
router.delete('/:id', async (req, res) => {});


module.exports = router;
