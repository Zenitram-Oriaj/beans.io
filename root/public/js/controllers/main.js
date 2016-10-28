/**
 * Created by Jairo Martinez on 10/20/16.
 */

app.controller('main',['$scope', function ($scope, socket, browser) {

	// Socket Events
	/////////////////////////////////////////////////////////////////////////

	socket.on('connect', function () {
		socket.emit('browser', browser.detect());
	});

	socket.on('disconnect', function (err) {
	});

	socket.on('error', function (err) {
		console.error(err);
	});

	socket.on('message', function (data) {

	});
}]);