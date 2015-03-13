'use strict';

angular.module('myApp.search', ['ngRoute', 'service'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when(
            '/search/:id', {
                templateUrl: '/components/search/search.html',
                controller: 'searchctrl',
                controllerAs: 'search'
            })
    }])
    .controller('searchctrl', ['search','$routeParams',function(searchService,$routeParams){
        var vm= this;
            searchService.searchEvents($routeParams.id).success(function(search){
                vm.result = search.data;
            })

    }]);

