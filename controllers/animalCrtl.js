'use strict'

const { bookshelf } = require('../db/database');
const Animal = require('../models/animals')

module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (error) => {
    next(error);
  });
}
module.exports.addAnimal = ({body}, res, next) => {
  Animal.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Post Success"}))
  .catch( (error) => {
    next(err);
  });
};
module.exports.deleteAnimal= ({params: {id}}, res, next) => {
  Animal.forge({id})
  .destroy()
  .then( (animal) => {
    res.status(202).json(animal);
  })
  .catch( (err) => {
    next(err);
  });
};
module.exports.editAnimal = ({body, params:{id}}, res, next) => {
  body.id = id
  Animal.forge(body)
  .save()
  .then( () => res.status(201).json({"msg": "Edit made to animal"}))
  .catch( (error) => {
    next(err);
  });
};
module.exports.getZoonimal = ({query: {animalId}}, res, next) => {
  Animal.forge({id: animalId})
  .fetch({withRelated: ['zookeepers'], require: true})
  .then( (anizoo) => {
    res.status(200).json(anizoo)
  })
  .catch( (err) => {
     next (err)
  })
}
