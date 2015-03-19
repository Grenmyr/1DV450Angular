'use strict';

angular.module('myApp.event', ['ngRoute', 'ngMap', 'service','myApp.login'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when(
            '/event/:id', {
                templateUrl: '/components/event/event.html',
                controller: 'eventCtrl',
                controllerAs: 'eventCtrl'
            })
    }])
    .controller('eventCtrl', ['event','create','update','delete', '$routeParams','login', function (getEvent,postPosition,putPosition,deletePosition, $routeParams,loginService) {
        var vm = this;
        vm.positions = [];
        vm.amounts = [];
        vm.showBool = false;
        vm.lat = null;

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
                            vm.message = "Your fidnings richness was changed to "+response.position.amount
                            vm.error= null;
                        }
                    })
                }).error(function(error){
                    vm.error = error.error;
                    vm.message= null;
                })
            }
            else{
                vm.error = "You must select a marker to update.";
                vm.message = null;
            }
        };

        vm.deleteMarker = function (){
            console.log(vm.selectedPosition);
            if(vm.selectedPosition !== undefined){
                deletePosition.delete(vm.selectedPosition).success(function(response){
                    vm.positions.forEach(function(position,i){
                        if (position.id ==  vm.selectedPosition.id) {
                            vm.positions.splice(i,1);
                            console.log("spliced")
                            vm.message = "The Finding was removed";
                            vm.error= null;
                        }
                    })
                }).error(function(error){
                    vm.error = error.error;
                    vm.message = null;
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
            if(parseInt(amount)) {
              var token =  JSON.parse(sessionStorage.getItem('loginToken'));
                    var position = {
                            lat: vm.lat,
                            lng: vm.lng,
                            amount: amount,
                            event_id: vm.event.id,
                            creator_id :  token.creator_id
                    };
                    postPosition.create(position).success(function(data){
                        vm.positions.push(data.position);
                        vm.creator.submits +=1;
                        vm.message = 'New Finding was created!';
                        vm.error = null;
                        loginService.jwt.submits +=1
                    }).error(function(error){
                        vm.error = error.error;
                        vm.message = null;
                    })
            }
            else{
                vm.message = null;
                vm.error = "You must estimate from 1-5 how rich your finding was, where 5 is max"
            }
        };

        getEvent.getEventById($routeParams.id).success(function (data) {
            console.log(data);
            vm.event = data.event;
            vm.event.type_ids = [];
            vm.creator = data.createdBy;
            data.types.forEach(function(type){
                vm.event.type_ids.push(type.id)
            });

            for (var i = 1; i < 6; i++) {
                vm.amounts.push(i);
            }

            vm.positions = data.positions;
        });


    }]);