'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function ($scope, User, Auth) {
    $scope.user = User.user;

    Auth.$onAuth(function(){
      $scope.$apply();
    });
  });
