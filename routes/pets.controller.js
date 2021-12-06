const Pet = require('../models/Pet')

// CRUDL
const createPet = async(req, res) => {
    const pet = new Pet({
        name: req.body.name,
        breed: req.body.breed,
        parents: [
            ...req.body.parents
        ]
    })

    try {
        await pet.save()
        res.json(pet)
    } catch (err) {
        res.json(err)
    }
}

const readPet = async(req, res) => {
    const petId = req.params.id
    try {
        const foundPet = await Pet.findById(petId)
        res.json(foundPet)
    } catch (err) {
        res.json(err)
    }
}

const updatePet = async(req, res) => {
    const petId = req.params.id
    console.log('hi')
    try {
        const foundPet = await Pet.findById(petId)
        const updatePet = {
            ...foundPet,
            ...req.body
        }
        await updatePet.save()
        res.json(updatePet)
    } catch (err) {
        res.send(err)
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
    listPets
}