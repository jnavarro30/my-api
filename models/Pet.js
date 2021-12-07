const mongoose = require('mongoose')

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    parents: [
        {
            name: {
                type: String
            }
        }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Pet', PetSchema)