exports.up = function(knex, Promise) {
	return knex.schema.createTable('measures', function(table) {
		table.increments('id').primary();
		table.string('aqi');
		table.integer('location_id').unsigned();
		table.foreign('location_id').references('id').inTable('locations');
		table.timestamps();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('measures');
};
