// create the module and name it scotchApp
var someApp = angular.module('scotchApp', ['ngRoute']);

someApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })
    .when('/clarity', {
      templateUrl: 'pages/clarity.html',
      controller : 'clarityController'
    })
});
