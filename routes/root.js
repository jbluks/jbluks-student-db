const express = require('express')
const router = express.Router()
const Students = require('../model/students')

router.route('/')
  .get((req, res) => {
    res.send('This is the Students API')
  })

  module.exports = router