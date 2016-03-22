'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function ($scope, user, User, Auth) {
    $scope.logout = function() { Auth.$unauth(); };

    var profile = User.getUserProfile(user.uid);

    profile.$bindTo($scope, 'profile');
  });
