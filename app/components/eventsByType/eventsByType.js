'use strict';

angular.module('myApp.eventsByType', ['ngRoute', 'service'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/type/:id', {
                templateUrl: '/components/eventsByType/eventsByType.html',
                controller: 'typeCtrl',
                controllerAs: 'typesCtrl'
            })
    }])
.controller('typeCtrl', ['eventsByType','$routeParams',function(getByTypeService,$routeParams){
    var vm= this;

   vm.showByType = getByTypeService.getTypeById($routeParams.id).success(function(data){
        vm.byType = data;
        console.log(data);
    })
}]);

