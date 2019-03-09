exports.up = function(knex, Promise) {
	return knex.schema.createTable('locations', function(table) {
		table.increments('id').primary();
		table.string('city');
		table.string('state');
		table.string('country');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('locations');
};
