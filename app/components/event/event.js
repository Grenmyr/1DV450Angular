'use strict';

angular.module('myApp.event', ['ngRoute', 'ngMap', 'service'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(
            '/event/:id', {
                templateUrl: '/components/event/event.html',
                controller: 'eventCtrl',
                controllerAs: 'eventCtrl'
            })
    }])
    .controller('eventCtrl', ['event', '$routeParams', function (event, $routeParams) {
        var vm = this;
        vm.positions = [];
        vm.amounts = [];
        console.log($routeParams.id);

        event.getEventById($routeParams.id).success(function (data) {
            vm.event = data.event;
            console.log(data.positions);
            data.positions.map(function (position) {
                return position.amount;
            }).forEach(function (amount) {

                if (vm.amounts.indexOf(amount) === -1) {
                    vm.amounts.push(amount);
                }
            });
            vm.amounts = vm.amounts.sort();
            console.log(vm.amounts);
            vm.positions = data.positions;
            console.log(vm.positions)
        });
    }]);