'use strict'

const { bookshelf } = require('../db/database');

require('./animals')
require('./zoo')

const Zookeeper = bookshelf.Model.extend({
  tableName: 'zookeepers',
  animals: function() {return this.belongsToMany('Animal').through('Zoonimal')}

},{
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then( (rows) => {
      // console.log("What rows??", rows)
      return rows
    })
    .catch( (error) => {
      return error
    });
  },
  getSingleZookeeper: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (zookeeper) => {
      return zookeeper;
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error;
    });
  }
})

module.exports = bookshelf.model('Zookeeper', Zookeeper);
