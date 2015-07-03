// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Route
weatherApp.config(function($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forcast', {
        templateUrl: 'pages/forcast.html',
        controller: 'forcastController'
    })
});

// Service

weatherApp.service('cityService', function(){
    this.city = 'Dhaka';
});


// Controller
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
}]);