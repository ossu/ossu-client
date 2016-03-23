'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.Course
 * @description
 * # Course
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('Course', function (Ref,$firebaseObject, $firebaseArray) {
    var Course = {},
      ref = Ref.child('courses'),
      courses = $firebaseArray(ref);

    Course.addCourse = function(course){
      return courses.$add(course);
    };

    Course.getCourses = function(){
      return courses;
    };

    Course.getCourseById = function(courseId){
      return $firebaseObject(ref.child(courseId));
    };

    return Course;
  });
