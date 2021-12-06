const express = require('express')
const app = express()
require('dotenv/config')

const mongoose = require('mongoose')

// import
const petsRouter = require('./routes/pets.router')

// body parser
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Welcome Home!')
})

app.use('/pets', petsRouter)

// database
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database connection established...')
})

// server
const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})