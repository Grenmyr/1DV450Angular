'use strict';

angular.module('myApp.register', ['ngRoute', 'service','myApp.login'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/register', {
                templateUrl: '/components/register/register.html',
                controller: 'registerCtrl',
                controllerAs: 'registerCtrl'
            })
    }])
    .controller('registerCtrl', ['register','$location','login',function(registerService,$location, loginService){
        var vm= this;
        vm.error = null;
        vm.register = function(){
            var registerData = {'name' : vm.name, 'password': vm.password};
            registerService.register(registerData).success(function(jwt){
                $location.path('/types');
                loginService.authorized = true;
                loginService.jwt = jwt
            })
        };


    }]);


