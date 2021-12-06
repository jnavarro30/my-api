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
    parents: [
        {
            name: {
                type: String,
                default: "None"
            }
        }
    ],
    time_stamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Pet', PetSchema)