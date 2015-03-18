angular.module('myApp.logout', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/logout', {
            templateUrl: '/components/logout/logout.html'
        });
    }]);
