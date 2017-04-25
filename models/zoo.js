'use strict'

const { bookshelf } = require('../db/database');
require('./animals');
require('./zookeepers');

const Zoo = bookshelf.Model.extend({
  tableName: 'zoo',
  zookeepers: function() {return this.belongsTo('Zookeepers')},
  animals: function (){return this.belongsTo('Animals')}

}

module.exports = bookshelf.model('Zoo', Zoo)
