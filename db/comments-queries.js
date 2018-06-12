const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex.from('comment')
    },

    getOne(id) {
        return knex.from('comment')
            .where('comment_id', id)
            .first();
    },

    create(comment) {
        return knex('comment')
            .insert(comment, '*');
    },

    update(id, comment) {
        return knex('comment')
            .where('comment_id', id)
            .update(comment, '*');
    },

    delete(id) {
        return knex('comment')
            .where('comment_id', id)
            .del();
    }
}