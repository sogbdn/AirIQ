exports.seed = function(knex, Promise) {
	return Promise.all([
		knex.raw('ALTER SEQUENCE measures_id_seq RESTART WITH 1'),
		knex('measures')
			.del()
			// Deletes ALL existing entries
			.then(function() {
				return knex('measures').insert([
					/* add actual values to test the database */
					{
						aqi: '141',
						location_id: 1
					},
					{
						aqi: '173',
						location_id: 2
					},
					{
						aqi: '58',
						location_id: 3
					}
				]);
			})
	]);
};
