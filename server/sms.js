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
const axios = require('axios');

require('dotenv').config();

// Twilio Credentials
const accountSid = process.env.SMSID;
const authToken = process.env.SMSAUTH;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

knex.from('users').innerJoin('locations', 'users.location_id', 'locations.id').then((users) => {
	users.forEach((user) => {
		axios
			.get(
				`https://api.airvisual.com/v2/city?city=${user.city}&state=${user.state}&country=${user.country}&key=u78aw3FawH3LQxNQx`
			)
			.then((res) => {
				console.log('aqius from AirVisual', res.data.data.current.pollution.aqius);
				console.log('city:', user.city);
				let newAqius = res.data.data.current.pollution.aqius;
				let messagebody = '';
				// Setting conditions for sms sending
				if (newAqius <= 50 && user.sms_good_days === 'yes') {
					messagebody = `AIR QUALITY in ${user.city} is ${newAqius} EXCELLENT CONDITIONS: Breath deep and travel far. This is a great day to enjoy the outdoors.`;
				}
				if (
					newAqius >= 100 &&
					newAqius < 150 &&
					user.sms_bad_days === 'true' &&
					(user.profile_type === 'life_style' || user.profile_type === 'medical')
				) {
					messagebody = `AIR QUALITY in ${user.city} is ${newAqius}: ALERT (MODERATE RISK). Sensitive groups should avoid prolonged exposure, where possible.`;
				}
				if (newAqius >= 150 && user.sms_bad_days === 'true') {
					messagebody = `AIR QUALITY in ${user.city} is ${newAqius}: ALERT (HIGH RISK) Serious risks from Air Pollution Today. Avoid extended periods outside or use filtration masks where possible.`;
				}
				// SMS sending
				if (messagebody) {
					var message = client.messages
						.create({
							body: messagebody,
							from: '+15799001336',
							to: user.phone_number
						})
						.then((message) => console.log(message.status))
						.done();
				}
			});
	});
});
