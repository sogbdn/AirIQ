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
const jsonWebToken = require('jsonwebtoken');

require('dotenv').config();

const myJWTSecretKey = process.env.secret;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')());
app.use(
	session({
		secret: 'qsd1213',
		cookie: { maxAge: 60000 }
	})
);

const server = app.listen(process.env.PORT || 3001, () => {
	console.log('Listening on port ' + server.address().port);
});

// GET routes
app.get('/ping', function(req, res) {
	return res.send('pong');
});

app.get('/verify/:token', (req, res) => {
	try {
		const tokenDecodedData = jsonWebToken.verify(req.params.token, myJWTSecretKey);
		return res.json({
			error: false,
			data: tokenDecodedData
		});
	} catch (error) {
		res.json({
			error: true,
			data: error
		});
	}
});

// POST routes
app.post('/register', (req, res) => {
	knex('users')
		.returning('id')
		.insert({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			password: req.body.password,
			profile_type: req.body.profile_type,
			sms_good_days: req.body.sms_good_days,
			sms_bad_days: req.body.sms_bad_days
		})
		.then(([ id ]) => {
			//	req.session.cookie.user_id = results[0];
			const token = jsonWebToken.sign(id, myJWTSecretKey);
			res.json({
				token: token
			});
			//return res.json({
			//success: true,
			//	message: 'new user registered in database'
			//});
		});
	//res.redirect('/') for react
});

app.post('/login', (req, res) => {
	const loginEmail = req.body.email;
	const loginPassword = req.body.password;
	//retrieve the user with this Email in the database and return its
	knex
		.select('*')
		.from('users')
		.where({ email: loginEmail, password: loginPassword })
		.then((results) => {
			if (results.length !== 0) {
				//	req.session.cookie.user_id = results[0].id;
				const token = jsonWebToken.sign(results[0], myJWTSecretKey);
				res.json({
					token: token
				});
				//	return res.json({
				//		success: true,
				//		message: 'new user login successful'
				//	});
			} else {
				res.json({ success: false, message: 'login was unsuccessful' });
			}
		})
		.catch((error) => {
			res.json({ success: false, message: 'login was unsuccessful' });
		});
	// redirect with react
});

app.post('/logout', (req, res) => {
	req.session = null;
	res.redirect('/');
});
