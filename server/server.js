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
const fetch = require('node-fetch');

require('dotenv').config();

const myJWTSecretKey = process.env.secret;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')());
app.use(
	session({
		secret: process.env.SESSION,
		cookie: { maxAge: 60000 }
	})
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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
		.returning('*')
		.insert({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			phone_number: req.body.phone_number,
			password: req.body.password,
			profile_type: req.body.concern_type,
			sms_good_days: req.body.good_days,
			sms_bad_days: req.body.bad_days
		})
		.then(([ user ]) => {
			console.log(user);

			const token = jsonWebToken.sign(user, myJWTSecretKey);
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

app.post('/changeNumber', (req, res) => {
	const email = req.body.email;
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const new_number = req.body.phone_number;

	knex
		.select('*')
		.from('users')
		.where({ email: email, first_name:first_name, last_name:last_name })
		.update({ phone_number: new_number})
		.returning('*')
		.then((results) => {
			if (results.length !== 0) {
				const token = jsonWebToken.sign(results[0], myJWTSecretKey);
				res.json({
					token: token
				});
			} else {
				res.json({ success: false, message: 'login was unsuccessful' });
			}
		})
		.catch((error) => {
			res.json({ success: false, message: 'login was unsuccessful' });
		});
})

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
					console.log(results);
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


app.get('/airqualityAPI', (req, res) =>{
	let vars = {
		lat: req.query.lat,
		long: req.query.long,
		airVisKey: process.env.airVisKey
	}
	fetch(`https://api.airvisual.com/v2/nearest_city?lat=${vars.lat}&lon=${vars.long}&key=${vars.airVisKey}`)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		res.json(myJson);
	});
})

app.get('/verifyUser', (req, res) => {
	bob = jsonWebToken.verify(req.query.currentUser, 'blablabla');
	res.json(bob)
})
