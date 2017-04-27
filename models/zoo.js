'use strict'

const { bookshelf } = require('../db/database');
require('./animals');
require('./zookeepers');

const Zoonimal = bookshelf.Model.extend({
  tableName: 'zoo',
  zookeepers: function() {return this.belongsTo('Zookeeper')},
  animals: function (){return this.belongsTo('Animal')}

},{
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      return rows
    })
    .catch( (error) => {
      return error
    });
  }
})

module.exports = bookshelf.model('Zoonimal', Zoonimal)
