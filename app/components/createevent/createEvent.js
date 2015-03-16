'use strict';

angular.module('myApp.createEvent', ['ngRoute', 'ngMap', 'service'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(
            '/create', {
                templateUrl: '/components/createevent/createEvent.html',
                controller: 'createCtrl',
                controllerAs: 'createCtrl'
            })
    }])
    .controller('createCtrl', ['create','types', '$routeParams', function (eventService,typesService, $routeParams) {
        var vm = this;
        vm.allTypes = typesService.getAllTypes().success(function (types){
            vm.typesArray = types.data;
            console.log(vm.typesArray)
        });
    }]);
