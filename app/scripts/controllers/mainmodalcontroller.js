'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:MainmodalcontrollerCtrl
 * @description
 * # MainmodalcontrollerCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('MainmodalcontrollerCtrl', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
      $uibModalInstance.close();
    };
  });
