var express = require('express');
var path = require('path');

//router object
var router = express.Router();

router.get('/team', function(req, res){
	res.sendFile(path.join(__dirname, '..', '/public/html/team.html'));
});

module.exports = router;