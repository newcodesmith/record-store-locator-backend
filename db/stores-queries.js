const knex = require('./knex'); // the connection

module.exports = {
    getAll() {
        return knex('store');
    },

    getOne(id) {
        return knex('store')
            .where('store_id', id)
            .first();
    },

    create(store) {
        return knex('store')
            .insert(store, '*');
    },

    update(id, album) {      
        return knex('store')
        .where('store_id', id)
        .update(album, '*');
    },

    delete(id) {
        return knex('store')
            .where('store_id', id)
            .del();
    }
}