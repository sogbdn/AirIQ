const http = require('http');
const path = require('path');
const methods = require('methods');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile');
const env = 'development';
const knex = require('knex')(knexConfig[env]);
const app = express();
const session = require('express-session');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')());
app.use(
	session({
		secret: 'qsd1213',
		cookie: { maxAge: 60000 }
	})
);

app.get('/ping', function(req, res) {
	return res.send('pong');
});

const server = app.listen(process.env.PORT || 3001, () => {
	console.log('Listening on port ' + server.address().port);
});

// POST routes
app.post('/register', (req, res) => {
	knex('users')
		.insert([
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				phone_number: req.body.phone_number,
				password: req.body.password,
				profile_type: req.body.profile_type,
				sms_good_days: req.body.sms_good_days,
				sms_bad_days: req.body.sms_bad_days
			}
		])
		.then((results) => {
			return res.json({
				success: true,
				message: 'new user registered in database'
			});
		});

	knex('users')
		.select('id')
		.from('users')
		.where({
			first_name: req.body.first_name,
			last_name: req.body.last_name
		})
		.then((results) => {
			req.session.cookie.user_id = results[0].id;
			console.log(req.session);
			//  return res.json({
			//	success: true,
			//	message: 'new user logged in'
			//});
		});
	res.redirect('/');
});

app.post('/login', (req, res) => {
	const loginEmail = req.body.email;
	const loginPassword = req.body.password;
	//retrieve the user with this Email in the database and return its id
	knex.select('*').from('users').where({ email: loginEmail, password: loginPassword }).then((results) => {
		if (results.length !== 0) {
			req.session.cookie.user_id = results[0].id;
		} else {
			//res.redirect('/login');
		}
	});
});

app.post('/logout', (req, res) => {
	req.session = null;
	res.redirect('/');
});
