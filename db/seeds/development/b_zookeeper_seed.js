
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zookeepers').del()
    .then(function () {
      // Inserts seed entries
    return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('zookeepers').insert({
          name: 'Henry'
        }),
        knex('zookeepers').insert({
          name: 'Joel'
        }),
        knex('zookeepers').insert({
          name: 'Noah'
        }),
        knex('zookeepers').insert({
          name: 'Sylvester'
        }),
        knex('zookeepers').insert({
          name: 'Kyle'
        })
      ])
    })
};
