'use strict'

const { Router } = require('express')
const router = Router()

const { getZookeepers, addZookeeper, deleteZookeeper } = require('../controllers/zookeeperCrtl')
const { getAnimals, addAnimal, getZoonimal, deleteAnimal } = require('../controllers/animalCrtl')

router.get('/animals', getAnimals)
router.get('/zookeepers', getZookeepers)
router.get('/zoo', getZoonimal)

module.exports = router
