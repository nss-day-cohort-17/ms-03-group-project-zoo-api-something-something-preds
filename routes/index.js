'use strict'

const { Router } = require('express')
const router = Router()

const { getAnimals } = require('../controllers/zooCrtl')

router.get('/animals', getAnimals)

module.exports = router