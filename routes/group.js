'use strict'

const express = require('express')
const path = require('path')

const router = express.Router();

router.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/group/create_form.html'))
});
  
router.post("/create", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/group/create.html'))
});

module.exports = router;