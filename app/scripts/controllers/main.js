'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('MainCtrl', function ($scope, Course) {

    $scope.courses = null;

    Course.getCourses().$loaded().then(function(data){
      $scope.courses = data;
    })



  });
