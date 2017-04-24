
exports.up = function(knex, Promise) {
  return knex.schema.createTable('animals', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('species').notNullable()
    table.integer('age').notNullable()
  })
  .createTable('zookeepers', function(table) {
    table.increments()
    table.string('name').notNullable().unique()
  })
  .createTable('zoo', (table) => {
    table.increments()
    table.integer('animal_id').unsigned().references('animals.id')
    table.integer('zookeeper_id').unsigned().references('zookeepers.id')
  })
};

exports.down = (knex, Promise) => knex.schema
 .dropTable('zoo')
 .dropTable('zookeepers')
 .dropTable('animals')
