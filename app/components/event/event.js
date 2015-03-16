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
    .controller('eventCtrl', ['event','create','update','delete', '$routeParams', function (getEvent,postPosition,putPosition,deletePosition, $routeParams) {
        var vm = this;
        vm.positions = [];
        vm.amounts = [];
        vm.showBool = false;
        vm.lat = null;
        console.log($routeParams.id);

       /* navigator.geolocation.getCurrentPosition(function (location) {
            vm.lat = location.coords.latitude;
            vm.lng = location.coords.longitude;
        });*/

        vm.marker = function (marker){
            vm.lat = marker.latLng.k;
            vm.lng = marker.latLng.D;
        };

        vm.selectMarker = function (marker){
            vm.showBool = !vm.showBool;
            vm.positions.forEach(function(position){
                if (position.lat === marker.latLng.k && position.lng === marker.latLng.D) {
                    vm.selectedPosition = position;
                }
            })
        };

        vm.updateMarker = function (amount){
            if(vm.selectedPosition !== undefined){
                vm.selectedPosition.amount = amount;
                putPosition.update(vm.selectedPosition).success(function(response){
                    vm.positions.forEach(function(position,i){
                        if (position.id ==  response.position.id) {
                            vm.positions.splice(i,1);
                            vm.positions.push(response.position);
                        }
                    })
                }).error(function(error){
                    vm.error = error.error;
                })
            }
            else{
                vm.error = "You must select a marker to update."
            }
        };

        vm.deleteMarker = function (){
            console.log(vm.selectedPosition);
            if(vm.selectedPosition !== undefined){
                deletePosition.delete(vm.selectedPosition).success(function(response){
                    console.log(response)
                    vm.positions.forEach(function(position,i){
                        if (position.id ==  vm.selectedPosition.id) {
                            vm.positions.splice(i,1);
                            console.log("spliced")
                            vm.message = "The Finding was removed";
                        }
                    })
                }).error(function(error){
                    vm.error = error.error;
                })
            }
            else{
                vm.error = "You must select a marker to update."
            }
        };

        vm.submitMarker = function (amount) {
            console.log(amount);
            if (vm.lat === null ) {
                vm.error = "Click blue marker to confirm location, or move and click marker if current location is not correct.";
                return;
            }
            if(amount !== undefined ) {
                    var position = {
                            lat: vm.lat,
                            lng: vm.lng,
                            amount: amount,
                            event_id: vm.event.id
                    };
                    postPosition.create(position).success(function(data){
                        vm.positions.push(data.position);
                        vm.message = 'New Finding was created!';
                        vm.error = null;
                    }).error(function(error){
                        vm.error = error.error;
                        vm.message = null;
                    })
            }
            else{
                vm.error = "You must estimate from 1-5 how rich your finding was, where 5 is max"
            }
        };

        getEvent.getEventById($routeParams.id).success(function (data) {
            vm.event = data.event;
            vm.event.type_ids = [];
            data.types.forEach(function(type){
                vm.event.type_ids.push(type.id)
            });

            data.positions.map(function (position) {
                return position.amount;
            }).forEach(function (amount) {

                if (vm.amounts.indexOf(amount) === -1) {
                    vm.amounts.push(amount);
                }
            });
            vm.amounts = vm.amounts.sort();
            vm.positions = data.positions;
        });
    }]);