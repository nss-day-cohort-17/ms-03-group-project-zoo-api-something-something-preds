'use strict'

const { bookshelf } = require('../db/database');
const Zookeeper = require('../models/zookeepers')

module.exports.getZookeepers = (req, res, next) => {
  Zookeeper.getAll()
  .then( (zookeepers) => {
    res.status(200).json(zookeepers);
  })
  .catch( (error) => {
    next(error);
  });
}
module.exports.addZookeeper = ({body}, res, next) => {
  Animal.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Nice POST, brah"}))
  .catch( (error) => {
    next(err);
  });
};
module.exports.deleteZookeeper= ({params: {id}}, res, next) => {
  Animal.forge({id})
  .destroy()
  .then( (animal) => {
    res.status(202).json(animal);
  })
  .catch( (err) => {
    next(err);
  });
};
