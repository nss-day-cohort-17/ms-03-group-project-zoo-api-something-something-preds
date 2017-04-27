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
  Zookeeper.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Post Success"}))
  .catch( (err) => {
    next(err);
  })
}
module.exports.deleteZookeeper= ({params: {id}}, res, next) => {
  Zookeeper.forge({id})
  .destroy()
  .then( (animal) => {
    res.status(202).json(animal);
  })
  .catch( (err) => {
    next(err);
  })
}
module.exports.editZookeeper = ({body, params: {id}}, res, next) => {
  body.id = id
  Zookeeper.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Edit made to zookeeper"}))
  .catch( (err) => {
    next(err);
  })
}
module.exports.getZookeepersAnimals = ({query: {zookeeperId}}, res, next) => {
  Zookeeper.forge({id: zookeeperId})
  .fetch({withRelated: ['animals'], require: true})
  .then( (zookeeperInfo) => {
    res.status(200).json(zookeeperInfo)
  })
  .catch( (err) => {
     next (err)
  })
}
