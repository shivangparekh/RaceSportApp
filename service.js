angular.module('raceApp.service', []). 
service('getDriverApi', function($http){
    
    var getApi = {};
    getApi.driver = function(){
      return $http({
         method: 'JSONP',
          url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }
     getApi.driverDetail = function(id){
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+id+'/driverStandings.json?callback=JSON_CALLBACK'
        });
        }
    getApi.races = function(id){
        return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+id+'/results.json?callback=JSON_CALLBACK'
        });
    }
   
  
    return getApi;
});
