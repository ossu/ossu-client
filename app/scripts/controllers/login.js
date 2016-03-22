'use strict';
/**
 * @ngdoc function
 * @name ossuClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('ossuClientApp')
  .controller('LoginCtrl', function ($scope, user, $location) {
    $scope.oauthLogin = function() {
      $scope.err = null;
      user.githubLogin().then(redirect, showError);
    };

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }
  });
