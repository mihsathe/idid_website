var express = require('express');
var reload = require('reload');

var app = express();

// set an enviornment variable for the port number. Default set to 3000
app.set('port', process.env.PORT || 3000);

// using static middleware
app.use(express.static('public'));

 /* creating routes */
//home
app.use(require('./routes/index'));

//team
app.use(require('./routes/team'));

//contact
app.use(require('./routes/contact'));

//publication
app.use(require('./routes/publication'));
/* end of creating routes */

//listen to requests from client
var server = app.listen(app.get('port'), function(){
	console.log('server started on '+ app.get('port'));
});

reload(server, app);