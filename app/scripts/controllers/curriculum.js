'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:CurriculumCtrl
 * @description
 * # CurriculumCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('CurriculumCtrl', function ($q, $scope, toaster, CourseCategory, Course) {
    $scope.courses = null;
    $scope.categories = null;
    $scope.curriculumLoaded = false;

    $q.all([CourseCategory.getCategories().$loaded(), Course.getCourses().$loaded()])
      .then(function (data) {
        $scope.categories = data[0];
        $scope.courses = data[1];
        $scope.curriculumLoaded = true;
      })
      .catch(function(err){
        toaster.pop('error', err);
      });
  });
