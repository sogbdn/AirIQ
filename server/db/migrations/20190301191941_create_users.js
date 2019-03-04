/* make sure to rollback before migrating or making changes */
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table) {
		table.increments('id').primary();
		table.string('first_name');
		table.string('last_name');
		table.string('email');
		table.string('phone_number');
		table.string('password');
		table.string('password_conf');
		table.string('profile_type');
		table.string('sms_good_days');
		table.string('sms_bad_days');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
