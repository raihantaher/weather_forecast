weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.city = cityService.city;
    
    $scope.submit = function(){
        $location.path('/forcast');
    };
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback : "JSON_CALLBACK" }, { get: { method: "JSONP" } });
    
    $scope.weatherResult = $scope.weatherAPI.get({ q : $scope.city, cnt : $scope.days });
    
    $scope.convertToCelsius = function(degK){
        return Math.round(degK - 273.15);
    }
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);   
    }
    
}]);
