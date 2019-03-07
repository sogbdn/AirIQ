exports.seed = function(knex, Promise) {
	return Promise.all([
		knex.raw('ALTER SEQUENCE locations_id_seq RESTART WITH 1'),
		knex('locations')
			.del()
			// Deletes ALL existing entries
			.then(function() {
				return knex('locations').insert([
					/* add actual values to test the database */
					{
						city: 'Hong Kong',
						state: 'Hong Kong',
						country: 'Hong Kong'
					},
					{
						city: 'Delhi',
						state: 'Delhi',
						country: 'India'
					},
					{
						city: 'Seoul',
						state: 'Seoul',
						country: 'Korea'
					}
				]);
			})
	]);
};
