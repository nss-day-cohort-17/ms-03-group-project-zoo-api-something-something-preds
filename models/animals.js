'use strict'

const { bookshelf } = require('../db/database');

require('./zoo')
require('./zookeepers')

const Animals = bookshelf.Model.extend({
  tableName: 'animals',
  zookeepers: function() {return this.belongsToMany('Zookeepers').through('Zoo')}

},{
  getAll: function() {
    console.log("Get all called from animals model");
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  },
  getSingleAnimal: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (animal) => {
      return animal;
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error;
    });
  }
})

module.exports = bookshelf.model('Animals', Animals);
