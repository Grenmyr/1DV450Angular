'use strict';

angular.module('myApp.login', ['ngRoute', 'service'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/components/login/login.html',
    controller: 'loginctrl'
  });
}])

.controller('loginctrl', ['login','$location','$scope', function(loginService, $location,$scope) {
        var vm = this;
        vm.loginService = loginService;

        if (sessionStorage.getItem('loginToken') !== null){
            loginService.authorized = true;
        }

        vm.logout = function () {
            sessionStorage.removeItem('loginToken');
            loginService.authorized = false;
            $location.path('/logout');
        };

        vm.login = function() {
            var loginData = {'name' : vm.name, 'password': vm.password};
            console.log(loginData);

            loginService.getLogin(loginData)
                .success(function (JWT){
                    sessionStorage.setItem('loginToken', JWT);
                    vm.toRoot();
                    console.log(JWT);
                    console.log(vm);
            })
                .error(function(loginData){
                   vm.error= loginData.error;
                    console.log(vm);
                    console.log(loginData.error)
                })

        };

        vm.toRoot = function () {
            $location.path('/');
        }
}]);

