'use strict'

const { bookshelf } = require('../db/database');
require('./animals');
require('./zookeepers');

const Zoonimal = bookshelf.Model.extend({
  tableName: 'zoo',
  zookeepers: function() {return this.belongsTo('Zookeeper')},
  animals: function (){return this.belongsTo('Animal')}

})

module.exports = bookshelf.model('Zoonimal', Zoonimal)
