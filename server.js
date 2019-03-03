const http = require('http');
const path = require('path');
const methods = require('methods');
const express = require('express');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const env = 'development';
const knex = require('knex')(knexConfig[env]);
const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')());

app.get('/ping', function(req, res) {
	return res.send('pong');
});

const server = app.listen(process.env.PORT || 3001, () => {
	console.log('Listening on port ' + server.address().port);
});

const createUserIndb = () => {
	return database.insert().then(() => data.rows[0]);
};

const findUserIndb = (user) => {
	return database
		.raw('SELECT * FROM users WHERE email = ?', [ req.body.email ])
		.then((data) => data.rows[0])
		.catch((error) => console.log(error));
};

// POST routes
app.post('/register', function(req, res) {
	knex('users')
		.insert([
			{ first_name: req.body.first_name },
			{ last_name: req.body.last_name },
			{ email: req.body.email },
			{ phone_number: req.body.phone_number },
			{ password: req.body.password },
			{ profile_type: req.body.profile_type },
			{ sms_good_days: req.body.sms_good_days },
			{ sms_bad_days: req.body.sms_bad_days }
		])
		.then((result) => {
			return res.json({ success: true, message: 'new user registered in database' });
			// redirect to '/' with react
		});
});

app.post('/login', function(req, res) {
	// Search email and password in db
	//knex('users')
	//	.where({
	//	email: req.body.email
	//	})
	//	.then(() => {
	//if (!email) return res.json({ success: false, message: 'email doesnt exist' });
	//	else
	//		knex('users')
	//		.where({
	//			})
	//			.then();
	//	if (!password) {
	//		return done(null, false);
	//	} else {
	//		return done(null, user);
	///	}
	//	});
	// redirect to '/user' with react
});
