
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        // Inserts seed entries b-plate had id, tut doesn't??
        knex('animals').insert({
          name: 'Hawky',
          species: 'bird',
          age: 8
        }),
        knex('animals').insert({
          name: 'Jag',
          species: 'fish',
          age: 1
        }),
        knex('animals').insert({
          name: 'Joe',
          species: 'Sheppard',
          age: 12
        }),
        knex('animals').insert({
          name: 'Yambo',
          species: 'tool-bag',
          age: 16
        }),
        knex('animals').insert({
          name: 'BooBoo',
          species: 'bear',
          age: 43
        })
      ])
    })
}
