/* make sure to rollback before migrating */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('name');
    /* add actual table columns here */
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
