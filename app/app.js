'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/view1', {
      templateUrl: '/components/view1/view1.html',
      controller: 'View1Ctrl'
  }).when('/view2', {
      templateUrl: '/components/view2/view2.html',
      controller: 'View2Ctrl'
  }).otherwise({redirectTo: '/'});
        $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);
