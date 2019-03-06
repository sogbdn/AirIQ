// Twilio Credentials
const accountSid = 'ACccea60ddaffa294e513c9fc050764833';
const authToken = 'd25b4c964d745f17749c51bd795cd99b';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
	{
		to: '+15144633838',
		from: '+15799001336',
		body: 'Hello Justin, test 1'
	},
	(err, message) => {
		console.log(message.sid);
	}
);
