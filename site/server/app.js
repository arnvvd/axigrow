// server/app.js
const express = require('express');
const morgan = require('morgan');
const twitter = require('./twitter-client.js');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use('/dist', express.static('dist'));

// Link to get User Object
app.get('/api/twitter/:user', (request, response) => {
  twitter.get('users/lookup', {screen_name: request.params.user})
    .then((tweet) => {
      response.send(tweet)
    })
    .catch((error) => {
      throw error;
    })
})

// Always return the main index.html
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

module.exports = app;