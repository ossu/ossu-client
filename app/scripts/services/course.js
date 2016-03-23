'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.Course
 * @description
 * # Course
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('Course', function (Ref, $firebaseArray) {
    var Course = {},
      courses = $firebaseArray(Ref.child('courses'));

    Course.addCourse = function(course){
      return courses.$add(course);
    };

    return Course;
  });
