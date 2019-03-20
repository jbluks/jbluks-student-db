const express = require('express')
const router = express.Router()
const Students = require('../model/students')

router.route('/')
  .get((req, res) => {
    res.json(Students.getStudents())
  })
  .post((req, res) => {
    const { name } = req.body
    const newStudent = Students.addStudent(name)
    res.json(newStudent)
  })

  module.exports = router