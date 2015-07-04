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
    
    .when('/forcast/:days', {
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

weatherApp.controller('forcastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback : "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    
    $scope.weatherResult = $scope.weatherAPI.get({ q : $scope.city, cnt : $scope.days });
    
    $scope.convertToCelsius = function(degK){
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);   
    }
    
}]);