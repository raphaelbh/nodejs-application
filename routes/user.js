'use strict'

const express = require('express')
const router = express.Router();

router.get('/:id', (req, res) => res.json({
    "id": req.params.id,
    "email": "fake@email.com"
}))

router.get('/', (req, res) => res.json([
    {"id": 1, "email": "fake@email.com"}
]))

module.exports = router;