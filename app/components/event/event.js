'use strict';

angular.module('myApp.event', ['ngRoute','ngMap', 'service'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/event/:id', {
                templateUrl: '/components/event/event.html',
                controller: 'eventCtrl',
                controllerAs: 'eventCtrl'
            })
    }])
.controller('eventCtrl', ['event','positions','$routeParams','$scope',function(event,positions,$routeParams,$scope){
    var vm= this;
    console.log($routeParams.id);

        /*if (navigator.geolocation) {
            console.log("Support");
         navigator.geolocation.getCurrentPosition(function(position){
                vm.position = position.coords;
                console.log(vm.position);


               *//* $scope.$apply(function(){
                    $scope.position = position;
                    console.log($scope.position);
                });*//*
            });
        }*/

      /*  $scope.$on('mapInitialized', function(event, map) {
            console.log("initialize")
            //map.setCenter(position.coords.latitude,position.coords.longitude);
        });*/

        event.getEventById($routeParams.id).success(function(data){
        vm.event = data.event;
        vm.positions = data.positions;


    });
       /* positions.getPositionsByEventID($routeParams.id).success(function(data){

        })*/
}]);