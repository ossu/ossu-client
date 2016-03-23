'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function ($scope, Auth, User) {
    $scope.user = User.user;

    Auth.$onAuth(function () {
      $scope.$apply();
    });
  });
