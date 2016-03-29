angular.module('raceApp.controller', [])
.controller('driversController', function($scope, getDriverApi){
    //$scope.name = null;
    $scope.driversList = [];
    
    getDriverApi.driver().success(function(response){
       $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  
})
.controller('driverDetail', function($scope, $routeParams, getDriverApi) {
    $scope.id = $routeParams.id;
    $scope.raceDetail = [];
    $scope.driver = null;

    getDriverApi.driverDetail($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    getDriverApi.races($scope.id).success(function (response) {
        $scope.raceDetail = response.MRData.RaceTable.Races; 
    }); 
  });



