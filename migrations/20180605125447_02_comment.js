exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', (table) => {
      table.increments('comment_id');
      table.integer('comment_store_id').references('store.store_id').unsigned();
      table.text('user_name');
      table.text('user_pic');
      table.text('dateCreated').notNullable().defaultTo(new Date().toISOString());
      table.text('comment');
      table.integer('rating');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comment');
  };