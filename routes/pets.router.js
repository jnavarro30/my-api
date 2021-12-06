const router = require("express").Router()
const petController = require('./pets.controller')

router
    .post('/', petController.createPet)
    .get('/:id', petController.readPet)
    .patch('/:id', petController.updatePet)
    .get('/', petController.listPets)
    

module.exports = router
    