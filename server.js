// Dependencies
var express = require('express'),
    logger = require('morgan'),
    app = express(),
    template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade'),
    clubs = require('jade').compileFile(__dirname + '/source/templates/clubs.jade');

// MongoDB connection

// Express
app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

// GET /
app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home'})
    res.send(html)
  } catch (e) {
    next(e)
  }
});

// GET /clubs
app.get('/clubs', function (req, res, next) {
	try {
		var html = clubs({ title: 'Clubs'})
		res.send(html)
	} catch (e) {
		next(e)
	}
});

// Routes for the API
app.use('/api', require('./routes/api'));

// server start up process
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
