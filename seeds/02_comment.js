const comments = require('../seed_data_files/comments-seed-data');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert(comments);
    });
};
