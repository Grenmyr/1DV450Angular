'use strict';

angular.module('myApp.event', ['ngRoute', 'service'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/event/:id', {
                templateUrl: '/components/event/event.html',
                controller: 'eventCtrl',
                controllerAs: 'eventCtrl'
            })
    }])
.controller('eventCtrl', ['event','$routeParams',function(event,$routeParams){
    var vm= this;
    console.log($routeParams.id);

    event.getEventById($routeParams.id).success(function(data){
        vm.event = data.event;
        vm.postion = data.positions;
        console.log(vm);
    })
}]);