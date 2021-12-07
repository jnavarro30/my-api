const Pet = require('../models/Pet')

// CRUDL
const createPet = async(req, res) => {
    try {
        const newPet = new Pet({ ...req.body })
        newPet.save()
        res.json(newPet)
    } catch (err) {
        res.json(newPet)
    }
}

const readPet = async(req, res) => {
    try {
        const foundPet = await Pet.findById(req.params.id)
        res.json(foundPet)
    } catch (err) {
        res.json(err)
    }
}

const updatePet = async(req, res) => {
    try {
        const updatedPet = await Pet.updateOne(
            { _id: req.params.id },
            {$set: {
                ...req.body
            }}
        )
        res.json(updatedPet)
    } catch (err) {
        res.json(err)
    }
}

const deletePet = async(req, res) => {
    try {
        await Pet.deleteOne({ _id: req.params.id })
        res.json(`Goodbye...`)
    } catch (err) {
        res.json(err)
    }
}

const listPets = async(req, res) => {
    const allPets = await Pet.find()
    res.json(allPets)
}

module.exports = {
    createPet,
    readPet,
    updatePet,
    deletePet,
    listPets
}