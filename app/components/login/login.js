'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/components/login/login.html',
    controller: 'loginctrl'
  });
}])

.controller('loginctrl', [function() {
console.log('logincontroller')
}]);

