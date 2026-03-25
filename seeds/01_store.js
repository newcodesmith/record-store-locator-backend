const stores = require('../seed_data_files/stores-seed-data');

exports.seed = function (knex) {
  // Reset related tables so seeding can run repeatedly without FK/sequence issues
  return knex.raw('TRUNCATE TABLE comment, store RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('store').insert(stores);
    });
};
