const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex.from('comment')
            .innerJoin('store', 'comment.comment_store_id', 'store.store_id')
    },

    getOne(id) {
        return knex.from('comment')
            .innerJoin('store', 'comment.comment_store_id', 'store.store_id')
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