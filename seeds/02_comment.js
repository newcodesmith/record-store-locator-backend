const comments = require('../comments-seed-data');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert(comments);
    });
};
