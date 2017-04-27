'use strict'

const { Router } = require('express')
const router = Router()

const { getZookeepers, addZookeeper, deleteZookeeper, editZookeeper, getZookeepersAnimals } = require('../controllers/zookeeperCrtl')

const { getAnimals, addAnimal, getAnimalsZookeepers, deleteAnimal, editAnimal } = require('../controllers/animalCrtl')

const {getZoo, addAnimalZookeeper, editAnimalZookeeper, deleteAnimalZookeeper, deleteKeeeperAnimal} = require('../controllers/zooCrtl')

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
router.get('/animal/zookeepers', getAnimalsZookeepers)

//Zookeeper relation routes
router.get('/zookeeper/animals', getZookeepersAnimals)

//animal zookeeper relation
router.get('/zoo', getZoo)
router.post('/zoo/animal/newAnimal', addAnimalZookeeper)
router.delete('/zoo/animalAndKeeper/delete',deleteAnimalZookeeper)
router.delete('/zoo/keeperAndAnimal/delete', deleteKeeeperAnimal)
router.patch('/zoo/animal/:id', editAnimalZookeeper)


module.exports = router
