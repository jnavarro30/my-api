const express = require('express')
const app = express()
require('dotenv/config')

// body parser
app.use(express.json())

// mongodb connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database connecton established...')
})

// routes
const petsRouter = require('./pets/pets.router')

app.get('/', (req, res) => {
    res.send('Welcome Home!!!')
})

app.use('/pets', petsRouter)

// server
app.listen(3000, () => {
    console.log('Server running on port: 3000')
})

// error handlers
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
  });

app.use((error, req, res, next) => {
    console.error(error)
    const { status = 500, message = 'Something went wrong!' } = error
    res.status(status).json({ error: message })
})

