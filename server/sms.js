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

// Twilio Credentials
const accountSid = 'ACccea60ddaffa294e513c9fc050764833';
const authToken = 'd25b4c964d745f17749c51bd795cd99b';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

var numbersToMessage = [ '+15144633838', '+15144633838' ];

numbersToMessage.forEach(function(number) {
	var message = client.messages
		.create({
			body: 'Hello Justin, test 3 avec array',
			from: '+15799001336',
			to: '+15144633838'
		})
		.then((message) => console.log(message.status))
		.done();
});

knex
	.select('*')
	.from('users')
	.then((results) => {
		userArrayGeneral = [];
		userArrayMedical = [];
		userArrayLifeStyle = [];

		results.map(function(user) {
			if (user.profile_type === 'general') {
				userArrayGeneral.push(user);
			} else if (user.profile_type === 'medical') {
				userArrayMedical.push(user);
			} else if (user.profile_type === 'life_style') {
				userArrayLifeStyle.push(user);
			}
		});
	})
	.catch((error) => {
		res.json({ success: false, message: 'array created' });
	});
