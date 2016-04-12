'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function (toaster, $timeout, $scope, Auth, User) {
    function saveCourses(course, message){
        $scope.courses.$save(course).then(function(){
          toaster.pop('success', message);
        });
    }

    $scope.courses = null;
    $scope.user = User.user;
    $scope.edit = {};


    $timeout(function () {
      User.getUserCourses($scope.user.uid).$loaded().then(function (data) {
        $scope.courses = data;
      });
    });

    $scope.updateStatus = function (course) {
      saveCourses(course, 'Course status updated');
    };

    $scope.updateRepository = function (course){
      saveCourses(course, 'Course repository updated');
    };
  });
