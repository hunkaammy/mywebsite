(function(angular){
  'use strict';
// Code goes here

var myApp = angular.module('myApp');
myApp.controller('mainCtrl', function ($scope,geolocation) {
    $scope.coords = geolocation.getLocation().then(function(data){
      return {lat:data.coords.latitude, long:data.coords.longitude};
    });
});

 })(window.angular);