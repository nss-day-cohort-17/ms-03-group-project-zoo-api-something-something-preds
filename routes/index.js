'use strict'

const { Router } = require('express')
const router = Router()

const { getZookeepers, addZookeeper, deleteZookeeper, editZookeeper } = require('../controllers/zookeeperCrtl')
const { getAnimals, addAnimal, getZoonimal, deleteAnimal, editAnimal } = require('../controllers/animalCrtl')

//animal routes
router.get('/animals', getAnimals)
router.post('/animals/new', addAnimal)
router.delete('/animals/delete/:id', deleteAnimal)
router.patch('/animals/edit/:id', editAnimal)

//zookeeper routes
router.get('/zookeepers', getZookeepers)
router.post('/zookeeper/new', addZookeeper)
router.delete('/zookeeper/delete/:id', deleteZookeeper)
router.patch('/zookeeper/edit/:id', editZookeeper)

//animal relation routes
router.get('/zoo', getZoonimal)

module.exports = router
