'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMap',
    'myApp.login',
    'myApp.types',
    'myApp.version',
    'myApp.eventsByType',
    'myApp.event',
    'myApp.search'
]).directive('navbar', function() {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/directive/menu.html";

        return directive;
    })
    .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider
      .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
    .constant('API', {
        'key': "123",
        'url': "http://localhost:3000/api/v1/", // base url
        'format': 'application/json' // Default representation we want
    });

