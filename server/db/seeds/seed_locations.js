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
						city: 'Kanpur',
						state: 'Uttar Pradesh',
						country: 'India'
					},
					{
						city: 'Kanpur',
						state: 'Uttar Pradesh',
						country: 'India'
					},
					{
						city: 'New York',
						state: 'New York',
						country: 'USA'
					}
				]);
			})
	]);
};
