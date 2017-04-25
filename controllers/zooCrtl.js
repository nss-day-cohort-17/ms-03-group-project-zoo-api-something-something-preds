'use strict'

const { bookshelf } = require('../db/database');
const Animal = require('../models/animals')
const Zookeeper = require('../models/zookeepers')

module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.getZookeepers = (req, res, next) => {
  Zookeeper.getAll()
  .then( (zookeepers) => {
    res.status(200).json(zookeepers);
  })
  .catch( (error) => {
    next(error);
  });
}

module.exports.getZoonimal = ({query: {animalId}}, res, next) => {
  console.log("Getting animalId", animalId)
  Animal.forge({id: animalId})
  .fetch({withRelated: ['zookeepers'], require: true})
  .then( (anizoo) => {
    res.status(200).json(anizoo)
  })
  .catch( (err) => {
     next (err)
  })
}
