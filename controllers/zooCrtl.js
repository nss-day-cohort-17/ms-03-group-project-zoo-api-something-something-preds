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
