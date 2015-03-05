'use strict';

angular.module('services', [])
    .service('allTypes', ['$http' ,function ($http) {
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
    }]);