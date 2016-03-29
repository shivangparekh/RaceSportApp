var raceApp = angular.module('raceApp', ['ngRoute', 'raceApp.controller', 'raceApp.service']);

raceApp.config(function($routeProvider){
   $routeProvider
    .when('/',{
       templateUrl:'driver/driver.html',
       controller:'driversController'
   })
    .when('/driverDetail/:id',{
        templateUrl:'driverDetail/driverDetail.html',
       controller:'driverDetail' 
   }).
   when('/driverDetail/:id',{
        templateUrl:'driverDetail/driverDetail.html',
       controller:'driverDetail' 
   }).
   otherwise({redirectTo: '/'})
});

