'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('ossuClientApp')
  .controller('AccountCtrl', function (toaster, $timeout, $scope, $uibModal, Auth, User) {
    $scope.courses = null;
    $scope.user = User.user;
    $scope.edit = {};


    $timeout(function () {
      User.getUserCourses($scope.user.uid).$loaded().then(function (data) {
        $scope.courses = data;
      });
    });

    $scope.enableEditMode = function (course) {
      $scope.edit[course.$id] = true;
    };

    $scope.discard = function (course) {
      $scope.edit[course.$id] = false;
    };

    $scope.update = function (course) {
      $scope.courses.$save(course).then(function () {
        toaster.pop('success', 'Course saved');
        $scope.edit[course.$id] = false;
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
