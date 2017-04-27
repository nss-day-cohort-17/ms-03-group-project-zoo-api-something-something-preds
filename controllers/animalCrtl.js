'use strict'

const { bookshelf } = require('../db/database');
const Animal = require('../models/animals')
const Zoo = require('../models/zoo')

module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then( (animals) => {
    res.status(200).json(animals);
  })
  .catch( (error) => {
    next(error);
  });
}
module.exports.addAnimal = ({body: {name, species, age, keepers}}, res, next) => {
  // console.log(name, species, age, keepers);
  let animal = {}
  animal.name = name
  animal.species = species
  animal.age = age
  console.log(animal);
  Animal.forge(animal)
  .save()
  .then( (data) => {
  if(keepers.length === 0 ) return   
    for (var i = 0; i < keepers.length; i++) {
      Zoo.forge({animal_id:data.id, zookeeper_id:keepers[i]}).save()
    }
  })
  .then(()=>res.status(201).json({"msg":"Good for you"}))
  .catch( (error) => {
    next(error);
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
module.exports.getAnimalsZookeepers = ({query: {animalId}}, res, next) => {
  Animal.forge({id: animalId})
  .fetch({withRelated: ['zookeepers'], require: true})
  .then( (animalInfo) => {
    res.status(200).json(animalInfo)
  })
  .catch( (err) => {
     next (err)
  })
}
