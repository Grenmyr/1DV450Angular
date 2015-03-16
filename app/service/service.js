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
    }]).service('search', ['$http' ,function ($http) {
        this.searchEvents = function (search) {
            var request = {
                url: 'http://localhost:3000/api/v1/events/',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123'
                },
                params: {query: search}
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
    }]).service('create', ['$http' ,function ($http) {
        this.create = function (position) {
            console.log(position);
            console.log(sessionStorage.getItem('loginToken'));
            var request = {
                url: 'http://localhost:3000/api/v1/positions',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123',
                    JWT: sessionStorage.getItem('loginToken')
                },
                data:{
                position:position}
            };
            return $http(request);
        }
    }]).service('update', ['$http' ,function ($http) {
        this.update = function (position) {
            console.log(position);
            console.log(sessionStorage.getItem('loginToken'));
            var request = {
                url: 'http://localhost:3000/api/v1/positions/'+position.id,
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123',
                    JWT: sessionStorage.getItem('loginToken')
                },
                data:{
                    position:position}
            };
            return $http(request);
        }
    }]).service('delete', ['$http' ,function ($http) {
        this.delete = function (position) {
            console.log(position);
            console.log(sessionStorage.getItem('loginToken'));
            var request = {
                url: 'http://localhost:3000/api/v1/positions/'+position.id,
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Token token=123',
                    JWT: sessionStorage.getItem('loginToken')
                },
                data:{
                    position:position}
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