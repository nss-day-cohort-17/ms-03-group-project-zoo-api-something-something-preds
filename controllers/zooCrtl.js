'use strict'

const { bookshelf } = require('../db/database');
const Zoo = require('../models/zoo')
const Animal = require('../models/animals')
const Zookeeper = require('../models/zookeepers')

module.exports.getZoo = (req, res, next) => {
  Zoo.getAll()
  .then( (zooInfo) => {
    res.status(200).json(zooInfo);
  })
  .catch( (error) => {
    next(error)
  })
}

module.exports.addAnimalZookeeper = ({body}, res, next) => {
  Zoo.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Post Success"}))
  .catch( (error) => {
    next(error);
  })
}

module.exports.editAnimalZookeeper = ({body, params: {id}}, res, next) => {
  body.id = id
  Zoo.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Edit made to zoo"}))
  .catch( (error) => {
    next(error);
  })
}

module.exports.deleteAnimalZookeeper = ({query: {id}}, res, next) => {
  Zoo.forge().where({animal_id: id})
  .destroy()
  .then( () => {
    return Animal.forge({id: id}).destroy()
  })
  .then(()=> {
    return res.status(201).json({"msg": `deleted from animal`})
  })
  .catch( (error) => {
    next(error);
  })
}
module.exports.deleteKeeeperAnimal = ({query: {id}}, res, next) => {
  Zoo.forge().where({animal_id: id})
  .destroy()
  .then( () => {
    return Zookeeper.forge({id: id}).destroy()
  })
  .then(()=> {
    return res.status(201).json({"msg": `deleted from zookeepers`})
  })
  .catch( (error) => {
    next(error);
  })
}
