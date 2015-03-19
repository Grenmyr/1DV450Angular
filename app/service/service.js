'use strict';

angular.module('service', [])
    .constant('API', {
    'key': 'Token token=123', //OBS Hårdkodad API key som seedas i rails register, bara för utveckling.
    'url': "http://188.166.3.35:3000/api/v1/", // base url
    'format': 'application/json' // Default representation we want
})
    .service('types', ['$http','API' ,function ($http,api) {
        this.getAllTypes = function () {
            var request = {
                url: api.url+'types',
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization: api.key
                }
            };
            return $http(request);
        }
    }]).service('eventsByType', ['$http','API' ,function ($http,api) {
        this.getTypeById = function (id) {
            var request = {
                url: api.url+'types/'+id+'/events',
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key
                }
            };
            return $http(request);
        }
    }]).service('search', ['$http','API' ,function ($http,api) {
        this.searchEvents = function (search) {
            var request = {
                url: api.url+'events/',
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key
                },
                params: {query: search}
            };
            return $http(request);
        }
    }]).service('event', ['$http','API' ,function ($http,api) {
        this.getEventById = function (id) {
            var request = {
                url: api.url+'events/'+id,
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key
                }
            };
            return $http(request);
        }
    }]).service('create', ['$http','API' ,function ($http,api) {
        this.create = function (position) {
            var token = JSON.parse(sessionStorage.getItem('loginToken'));
            var request = {
                url: api.url+'positions',
                method: 'POST',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key,
                    JWT: token.jwt
                },
                data:{
                position:position}
            };
            return $http(request);
        }
    }]).service('update', ['$http','API' ,function ($http,api) {
        this.update = function (position) {
            var token = JSON.parse(sessionStorage.getItem('loginToken'));
            var request = {
                url: api.url+'positions/'+position.id,
                method: 'PUT',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key,
                    JWT: token.jwt
                },
                data:{
                    position:position}
            };
            return $http(request);
        }
    }]).service('delete', ['$http','API' ,function ($http,api) {
        this.delete = function (position) {
            var token = JSON.parse(sessionStorage.getItem('loginToken'));
            var request = {
                url: api.url+'positions/'+position.id,
                method: 'DELETE',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key,
                    JWT: token.jwt
                },
                data:{
                    position:position}
            };
            return $http(request);
        }
    }])/*.service('positions', ['$http','API' ,function ($http,api) {
        this.getEventById = function (id) {
            var request = {
                url: api.url+'events/'+id,
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key
                }
            };
            return $http(request);
        }
    }])*/.service('register', ['$http','API' ,function ($http,api) {
        this.register = function (registerData) {
            console.log(registerData);
            var request = {
                url: 'http://188.166.3.35:3000/api/register',
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key,
                    name: registerData.name,
                    password : registerData.password
                }
            };

            return $http(request).success(function(JWT){
                sessionStorage.setItem('loginToken', JSON.stringify(JWT));
            });
        }
    }]).service('login', ['$http','API' ,function ($http,api) {
        var vm = this;
        this.authorized = false;
        this.jwt = false;

        this.getLogin = function (loginData) {
            var request = {
                url: 'http://188.166.3.35:3000/api/login',
                method: 'GET',
                headers: {
                    Accept: api.format,
                    Authorization:  api.key,
                    password:loginData.password,
                    name: loginData.name
                }
            };
            return $http(request)
                .success(function(JWT){
                    vm.authorized = true;
                    sessionStorage.setItem('loginToken', JSON.stringify(JWT));
                    vm.jwt = JWT;
                });
        }
    }]);