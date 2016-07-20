'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function (toaster, $timeout, $q, $scope, $uibModal, Auth, User) {
    function saveCourses(course, message) {
      $scope.courses.$save(course).then(function () {
        toaster.pop('success', message);
      });
    }

    $scope.courses = null;
    $scope.extraCourses = null;
    $scope.user = User.user;
    $scope.edit = {};


    $timeout(function () {
      $q.all([
        User.getUserCourses($scope.user.uid).$loaded(),
        User.getUserExtraCourses($scope.user.uid).$loaded()
      ]).then(function (data) {
        $scope.courses = data[0];
        $scope.extraCourses = data[1];
      });
    });

    $scope.updateStatus = function (course) {
      saveCourses(course, 'Course status updated');
    };

    $scope.updateRepository = function (course) {
      saveCourses(course, 'Course repository updated');
    };

    $scope.addExtraCourse = function (extraCourse) {
      User.addExtraCourse($scope.user.uid, extraCourse).then(function () {
        toaster.pop('success', 'Eextra course successfully added');
      });
    };

    $scope.confirmResetProgress = function () {
      $uibModal.open({
        templateUrl: '/partials/resetProgressModal.html',
        controller: 'ResetProgressModalController'
      });
    };
  });

//Controller for reset progress modal window
angular.module('ossuClientApp').controller('ResetProgressModalController', function ($scope, $uibModalInstance, toaster, User) {
  var user = User.user;

  $scope.reset = function () {
    return User.deleteCourses(user.uid)
      .then(function () {
        return User.copyCourses(user.uid);
      })
      .then(function () {
        $uibModalInstance.dismiss();
        toaster.pop('success', 'Progress reset');
      })
      .catch(function (err) {
        toaster.pop('error', err);
      });
  };

  $scope.dismiss = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
