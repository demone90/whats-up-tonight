// dependencies

var express = require('express'),
    router = express.Router();

// API routes

router.get('/club/day/:day', function(req, res) {
	res.send('this endpoint will return all clubs in Berlin for specific day');
});

router.get('/club/id/:id/day/:day', function(req, res) {
	res.send('this endpoint will return a specific club for a specific day');
});

router.get('/club/day/:day/radius/:radius', function(req, res) {
	res.send('this endpoint will return a bunch of clubs for a specific day on a specific geo radius');
});


//returns router

module.exports = router;