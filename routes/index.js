'use strict'

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.json({
    "application": "nodejs-application",
    "version": "1.0.0"
}))

module.exports = router;