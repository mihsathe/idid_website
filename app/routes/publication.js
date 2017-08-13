var express = require('express');
var path = require('path');

//router object
var router = express.Router();

router.get('/publication', function(req, res){
	res.sendFile(path.join(__dirname, '..', '/public/html/publication.html'));
});

module.exports = router;