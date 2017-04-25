exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoo').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
       knex('zoo').insert({
         animal_id: 1,
         zookeeper_id: 1
       }),
       knex('zoo').insert({
         animal_id: 2,
         zookeeper_id: 2
       }),
       knex('zoo').insert({
         animal_id: 3,
         zookeeper_id: 3
       }),
       knex('zoo').insert({
         animal_id: 4,
         zookeeper_id: 4
       }),
       knex('zoo').insert({
         animal_id: 5,
         zookeeper_id: 5
       })
     ]);
    });
};

