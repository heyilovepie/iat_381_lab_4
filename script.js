// create the module and name it scotchApp
var someApp = angular.module('scotchApp', ['ngRoute']);

someApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller : 'mainController'
    })
});

// create the controller and inject Angular's $scope
someApp.controller('mainController', function($scope) {
  console
  $scope.message = 'This is an awesome app!';
});