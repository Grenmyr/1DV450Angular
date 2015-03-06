'use strict';

angular.module('myApp.login', ['ngRoute', 'service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/components/login/login.html',
    controller: 'loginctrl'
  });
}])

.controller('loginctrl', ['login', function(loginService) {
        var vm = this;

        vm.login = function() {
            var loginData = {'name' : vm.name, 'password': vm.password};
            console.log(loginData);

            loginService.getLogin(loginData).success(function (JWT){
                console.log(JWT);
            })};
}]);

