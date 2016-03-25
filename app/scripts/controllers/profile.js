'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('ProfileCtrl', function ($scope, $routeParams, User) {
    var userUid = $routeParams.userUid;

    $scope.userCourses = null;
    $scope.userProfile = null;

    User.getUserByUid(userUid).$loaded().then(function (user) {
      $scope.userCourses = user.courses;
      $scope.userProfile = user;
    });
  });
