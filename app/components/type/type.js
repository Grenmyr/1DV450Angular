'use strict';

angular.module('myApp.type', ['ngRoute', 'services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/type', {
    templateUrl: '/components/type/type.html',
    controller: 'typectrl'
  });
}])

.controller('typectrl', ['allTypes', function(allTypesService) {
        console.log(allTypesService);
        allTypesService.getAllTypes().success(function (data){
            console.log(data);
        });
}]);
    /*.service('allTypes', ['$http' ,function ($http) {
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
    }]);*/
