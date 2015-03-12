'use strict';

angular.module('myApp.types', ['ngRoute', 'service'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/types', {
    templateUrl: '/components/types/types.html',
    controller: 'typectrl',
      controllerAs: 'types'
  })
}])

.controller('typectrl', ['types','$routeParams', function(allTypesService,$routeParams) {
        var vm = this;
        vm.typesArray = null;

        vm.allTypes = allTypesService.getAllTypes().success(function (data){
            //console.log(data);
            vm.typesArray = data;
            //console.log(vm.typesArray)
            });

}]);
