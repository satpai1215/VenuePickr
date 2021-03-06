
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/eventRoutes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var partials = require('express-partials')

 var events = require('./public/javascripts/events');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.cookieParser('satyan'));
app.use(express.cookieSession());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/events', routes.index);
app.get('/events/:id', routes.show);
app.post('/createEvent', routes.create)
//app.get('/users', user.list);

var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

io.sockets.on('connection', function(socket) {
	console.log('socket.io connected');

	socket.on('addVenue', function(data) {
		var venue = events.addVenue(data);

		//submit to all clients
		io.sockets.emit('venueSaved', venue );
	});
});






