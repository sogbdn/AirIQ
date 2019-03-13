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
						city: 'New York',
						state: 'New York',
						country: 'USA'
					},
					{
						city: 'Bhiwadi',
						state: 'Rajasthan',
						country: 'India'
					},
					{
						city: 'New Delhi',
						state: 'Delhi',
						country: 'India'
					}
				]);
			})
	]);
};
