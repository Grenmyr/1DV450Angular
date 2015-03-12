'use strict';

angular.module('service', [])
    .service('types', ['$http' ,function ($http) {
        this.getAllTypes = function () {
            var request = {
                url: 'http://localhost:3000/api/v1/types',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123'
                }
            };
            return $http(request);
        }
    }]).service('eventsByType', ['$http' ,function ($http) {
        this.getTypeById = function (id) {
            var request = {
                url: 'http://localhost:3000/api/v1/types/'+id+'/events',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123'
                }
            };
            return $http(request);
        }
    }]).service('event', ['$http' ,function ($http) {
        this.getEventById = function (id) {
            var request = {
                url: 'http://localhost:3000/api/v1/events/'+id,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123'
                }
            };
            return $http(request);
        }
    }]).service('positions', ['$http' ,function ($http) {
        this.getEventById = function (id) {
            var request = {
                url: 'http://localhost:3000/api/v1/events/'+id,
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123'
                }
            };
            return $http(request);
        }
    }]).service('login', ['$http' ,function ($http) {
        var vm = this;
        this.authorized = false;

        this.getLogin = function (loginData) {
            var request = {
                url: 'http://localhost:3000/api/login',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123',
                    password:loginData.password,
                    name: loginData.name
                }
            };
            return $http(request)
                .success(function(){
                    vm.authorized = true;

                });
        }
    }]);