'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals, getZookeepers } = require('../controllers/zooCrtl')

router.get('/animals', getAnimals)
router.get('/zookeepers', getZookeepers)

module.exports = router