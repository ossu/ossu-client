'use strict';
/**
 * @ngdoc function
 * @name ossuClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('ossuClientApp')
  .controller('NavbarCtrl', function (toaster, $scope, User, $location) {
    $scope.loginWithGithub = function () {
      $scope.err = null;
      User.githubLogin().then(redirect, showError);
    };

    $scope.logout = function () {
      User.logout();
    };

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }
  });
