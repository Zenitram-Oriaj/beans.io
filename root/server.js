#!/usr/bin/env node

var app = require('./app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

io.on('connection', function(socket){
	console.log('connected');

	socket.on('browser', function (data) {
		console.log(data);
	});

	socket.on('disconnect', function(){
		console.log('disconnected');
	});
});

http.listen(port);

http.on('error', function(err){
	if (err.syscall !== 'listen') {
		throw err;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (err.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw err;
	}
});

http.on('listening', function(){
	var addr = http.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	console.log('Listening on ' + bind);
});
