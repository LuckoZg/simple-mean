var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'view/pregled.html'
	})
	.when('/unos', {
		templateUrl: 'view/unos.html'
	})
	.when('/:slovo', {
		templateUrl: 'view/pregled.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});