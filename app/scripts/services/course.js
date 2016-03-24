'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.Course
 * @description
 * # Course
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('Course', function (Ref, $firebaseObject, $firebaseArray) {
    var Course = {},
      ref = Ref.child('courses'),
      courses = $firebaseArray(ref);

    Course.addCourse = function (course) {
      return courses.$add(course);
    };

    Course.getCourses = function () {
      return courses;
    };

    Course.getUserCourses = function (userUid) {
      return $firebaseArray(Ref.child('profiles').child(userUid).child('courses'));
    };

    Course.updateUserCourse = function (userUid, courseId, newCourseObj) {
      var courseRef = $firebaseObject(Ref.child('profiles').child(userUid).child('courses').child(courseId));

      return courseRef.$loaded().then(function () {
        courseRef.status = newCourseObj.status;
        courseRef.repo = newCourseObj.repo || '';

        return courseRef.$save();
      });
    };

    return Course;
  });
