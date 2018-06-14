exports.up = function(knex, Promise) {
    return knex.schema.createTable('store', (table) => {
      table.increments('store_id');
      table.text('name').notNullable();
      table.text('address').notNullable();
      table.text('latitude');
      table.text('longitude');
      table.text('hours');
      table.text('phone');
      table.text('web_address');
      table.text('facebook');
      table.text('description');
      table.text('photo');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('store');
  };