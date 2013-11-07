'use strict';

angular.module('shop1App')
  .controller('MainCtrl', function ($scope, $http) {

    $http.get('/api/phones').success(function(phones) {
      $scope.phones = phones;
    });

    $http.get('/api/phonesPaginated').success(function(phones) {
      $scope.phonesPaginated = phones;
    });    

  });