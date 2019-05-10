## SCREENSHOTS 
!["Screenshots of Front page"](https://github.com/sogbdn/AirIQ/blob/master/docs/AirIQ%20Front%20page.png)
!["Screenshots of Recommendations based on profiles"](https://github.com/sogbdn/AirIQ/blob/master/docs/AirIQ%20Recommandations.png)
!["Screenshots of Google map API and Twilio"](https://github.com/sogbdn/AirIQ/blob/master/docs/AirIQ%20API%20and%20TWILIO.png)


## INSTALL DEPENDENCIES

1. cd into the */server* folder.
2. From the */server* folder, run ```npm install``` (server dependencies).
3. Open a second terminal and cd into the */client* folder.
4. From the */client* folder, run ```npm install``` (React dependencies).
5. Use ```npm run server``` from the */server* terminal to start the server on ```http://localhost:3000/```
6. User ```npm start``` from the */client* terminal to start the client on 3001

## CREATING THE KNEX DATABASE

1. From the */Final_Project* folder, run ```psql```.
2. From the psql terminal, run ```CREATE DATABASE air_iq;```.
3. Use ```\q``` to leave the psql terminal.
4. Run ```knex migrate:currentVersion``` to check if a table already exists.
5. If a current version exists, run ```knex migrate:rollback``` then repeat from step 4 until it says *none*.
  - Most versions of knex will only need you to rollback once to clear all of them
6. Run ```knex migrate:latest``` to create the empty migration tables.
7. To populate the database with static data, run ```knex seed:run```

## ADD GOOGLE API KEYS

1. You will need to generate and add your own Google maps API key, following the unfortunate change to a paid use/access to the API in 2018.

 <a href="https://developers.google.com/maps/documentation/javascript/get-api-key#quick-guide">QUICK GUIDE</a>

 <a href="https://developers.google.com/maps/documentation/javascript/tutorial">JAVASCRIPT API</a>

 <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">API KEY</a>

These keys will need to be added in order to look up locations beyont the default geolocation/Montreal view, and and to view the 'mapview' of the Air Quality currently being retreived on the front page.

NOTE: To use the Maps JavaScript API, you must get an API key and you must enable billing in your account. The links above will explain the necessary steps in further detail. You can enable billing when you get your API key (see the Quick guide) or as a separate process (see Usage and Billing).

2. Add API Key to two files. 
First, in the client folder (/client/public/index.html), in the index.html file, at the line
```script src="https://maps.googleapis.com/maps/api/js?key=INSERTAPIKEYHERE&libraries=places"```
.
Second, in the client folder, (/client/src/components/pages/MapView.js), in the MapView.js file, at line 287:
```apiKey: ('INSERTAPIKEYHERE')```


