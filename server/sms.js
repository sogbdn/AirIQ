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

//var numbersToMessage = [ '+15144633838', '+15144633838' ];
//numbersToMessage.forEach(function(number) {
//	var message = client.messages
//	.create({
//	body: 'Hello Justin',
//from: '+15799001336',
//to: number
//})
//.then((message) => console.log(message.status))
//.done();
//});

const setSMSbody = (aqius, profile, sms_bad_days, sms_good_days) => {
	if (aqius > 50 && sms_good_days === 'yes') {
		return `Air QUALITY in ${user.city} is ${aqius}: EXCELLENT CONDITIONS: Breath deep and travel far. This is a great day to enjoy the outdoors.`;
	} else if (
		(aqius > 100 && aqius < 150 && sms_bad_days === 'true' && profile === 'life_style') ||
		profile === 'medical'
	) {
		return `AIR QUALITY in ${user.city} is ${aqius}: ALERT (MODERATE RISK). Sensitive groups should avoid prolonged exposure, where possible.  `;
	} else if (aqius >= 150 && sms_bad_days === 'true') {
		return `AIR QUALITY in ${user.city} is ${aqius}:ALERT (HIGH RISK) Serious risks from Air Pollution Today. Avoid extended periods outside or use filtration masks where possible  `;
	}
};

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
				var message = client.messages
					.create({
						//body: setSMSbody(newAqius, user.profile, user.sms_good_days, user.sms_bad_days),
						body: `Hello, air quality in ${user.city} is ${newAqius}`,
						from: '+15799001336',
						to: user.phone_number
					})
					.then((message) => console.log(message.status))
					.done();
			});
	});

	return;

	userArrayGeneral = [];
	userArrayMedical = [];
	userArrayLifeStyle = [];

	results.map(function(user) {
		if (users.profile_type === 'general') {
			userArrayGeneral.push(user);
		} else if (users.profile_type === 'medical') {
			userArrayMedical.push(user);
		} else if (users.profile_type === 'life_style') {
			userArrayLifeStyle.push(user);
		}
	});

	filterNbGeneralGood = [];
	filterNbGeneralBad = [];
	filterNbMedicalGood = [];
	filterNbMedicalBad = [];
	filterNbLifeStyleGood = [];
	filterNbLifeStyleBad = [];

	userArrayGeneral.map(function(user) {
		if (user.sms_good_days === 'yes') {
			filterNbGeneralGood.push(user.phone_number);
		} else if (user.sms_bad_days === 'yes') {
			filterNbGeneralBad.push(user.phone_number);
		}
	});
	userArrayMedical.map(function(user) {
		if (user.sms_good_days === 'yes') {
			filterNbMedicalGood.push(user.phone_number);
		} else if (user.sms_bad_days === 'yes') {
			filterNbMedicalBad.push(user.phone_number);
		}
	});
	userArrayLifeStyle.map(function(user) {
		if (user.sms_good_days === 'yes') {
			filterNbLifeStyleGood.push(user.phone_number);
		} else if (user.sms_bad_days === 'yes') {
			filterNbLifeStyleBad.push(user.phone_number);
		}
	});

	//.catch ((error) => {
	//res.json({ success: false, message: 'array created' });
	//});

	// SMS sending
	var numbersToMessage = filterNbLifeStyleGood;

	numbersToMessage.forEach(function(number) {
		var message = client.messages
			.create({
				body: 'Hello, today is a good day for life_style person!!',
				from: '+15799001336',
				to: number
			})
			.then((message) => console.log(message.status))
			.done();
	});
});
