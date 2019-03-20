const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const rootRouter = require('./routes/root')
const studentsRouter = require('./routes/students')
require('dotenv').config()

// Configuration
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/', rootRouter)
app.use('/students', studentsRouter)

app.listen(PORT, () => {
  console.log(`listening on ${process.env.PORT}`)
})