// populates database table users with fake users
//called a_users for sorting and quality of life reasons
exports.seed = function(knex, Promise) {
	return Promise.all([
		knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
		knex('users')
			.del()
			// Deletes ALL existing entries
			.then(function() {
				return knex('users').insert([
					/* add actual values to test the database */
					{
						first_name: 'Leslie',
						last_name: 'Plumb',
						email: 'souris@fromage.com',
						phone_number: '+15149663978',
						password: 'abc123',
						profile_type: 'life_style',
						sms_good_days: 'yes',
						sms_bad_days: 'no',
						location_id: 1
					},
					{
						first_name: 'Sonia',
						last_name: 'Barret',
						email: 'grenouille@mare.com',
						phone_number: '+33695681356',
						password: 'abc123',
						profile_type: 'medical',
						sms_good_days: 'yes',
						sms_bad_days: 'yes',
						location_id: 2
					},
					{
						first_name: 'Justin',
						last_name: 'Mao',
						email: 'bird@birdy.com',
						phone_number: '+15144633838',
						password: 'abc123',
						profile_type: 'general',
						sms_good_days: 'no',
						sms_bad_days: 'no',
						location_id: 3
					}
				]);
			})
	]);
};
