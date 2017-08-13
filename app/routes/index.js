var express = require('express');
var path = require('path');
//router object
var router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '..', '/public/html/index.html'));
});

module.exports = router;