// create the module and name it scotchApp
var someApp = angular.module('scotchApp', ['ngRoute']);

someApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })

    .when('/about', {
      templateUrl: 'pages/about.html',
      controller : 'aboutController'
    })

    .when('/clarity', {
      templateUrl: 'pages/clarity.html',
      controller : 'clarityController'
    })
});

window.onload = function(){
	var mc = new Hammer(document.getElementById('hammer-pad'));
	mc.on('pan', function(){
		alert('You can\'t touch this');
	});
};
