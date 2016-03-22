'use strict';
/**
 * @ngdoc function
 * @name ossuClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('ossuClientApp')
  .controller('LoginCtrl', function ($scope, User, $location) {
    $scope.loginWithGithub = function() {
      $scope.err = null;
      User.githubLogin().then(redirect, showError);
    };

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }
  });
