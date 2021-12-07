const router = require('express').Router()
const petsController = require('./pets.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .post('/', petsController.createPet)
    .get('/', petsController.listPets)
    .all(methodNotAllowed)

router
    .get('/:id', petsController.readPet)
    .patch('/:id', petsController.updatePet)
    .delete('/:id', petsController.deletePet)
    .all(methodNotAllowed)

module.exports = router