'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals, getZookeepers, getZoonimal } = require('../controllers/zooCrtl')

router.get('/animals', getAnimals)
router.get('/zookeepers', getZookeepers)
router.get('/zoo', getZoonimal)

module.exports = router