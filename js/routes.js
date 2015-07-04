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
