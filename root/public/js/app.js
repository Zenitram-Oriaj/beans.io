/**
 * Created by jm on 10/17/16.
 */
var app = angular.module('app', [
	'ui.router',
	'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

	// Set default state
	$urlRouterProvider.otherwise("/");

	// Set All Available States
	$stateProvider
		.state('home',{
			url: "/",
			templateUrl: "views/home.html"
		});
});

app.config(function ($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.run(function ($rootScope, $location, $state) {

});