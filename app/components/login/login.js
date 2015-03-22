'use strict';

angular.module('myApp.login', ['ngRoute', 'service'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: '/components/login/login.html',
            controller: 'loginctrl'
        });
    }])

    .controller('loginctrl', ['login', '$location', '$scope', function (loginService, $location) {
        var vm = this;
        vm.loginService = loginService;
        if (sessionStorage.getItem('loginToken') !== null) {
            loginService.authorized = true;
            loginService.jwt = JSON.parse(sessionStorage.getItem('loginToken'))

        }


        vm.logout = function () {
            sessionStorage.removeItem('loginToken');
            loginService.authorized = false;
            $location.path('/logout');
        };

        vm.login = function () {
            var loginData = {'name': vm.name, 'password': vm.password};

            loginService.getLogin(loginData)
                .success(function (JWT) {
                    sessionStorage.setItem('loginToken', JSON.stringify(JWT));
                    $location.path('/types');
                })
                .error(function (loginData) {
                    vm.error = loginData.error;
                })

        };
        vm.toRoot = function () {
            $location.path('/');
        }
    }]);

