const http = require('http')
const path = require('path')
const methods = require('methods')
const express = require('express')
const bodyParser = require('body-parser')
const knexConfig = require('./knexfile')
const env = 'development'
const knex = require('knex')(knexConfig[env])
const app = express()

var webpack = require('webpack');
var config = require('./webpack.config.dev.js');

var compiler = webpack(config);

require("dotenv").config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('method-override')())

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
// app.use('/public', express.static('public'));
// app.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });



app.get('/ping', function (req, res) {
 return res.send('pong')
})

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('Listening on port ' + server.address().port)
})
