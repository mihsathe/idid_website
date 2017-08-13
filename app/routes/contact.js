var express = require('express');
var path = require('path');
//router object
var router = express.Router();

router.get('/contact', function(req, res){
	res.sendFile(path.join(__dirname, '..', '/public/html/contact.html'));
});

module.exports = router;