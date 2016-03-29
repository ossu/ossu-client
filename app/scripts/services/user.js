'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.user
 * @description
 * # user
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('User', function ($log, $timeout, $q, $firebaseObject, $firebaseArray, Ref, Auth, Course) {
    var Authentication = {
      user: {},

      createProfile: function (uid, user) {
        var profileRef = $firebaseObject(Ref.child('profiles').child(uid)),
          courses = Course.getCourses();

        return $q.all([profileRef.$loaded(), courses.$loaded()]).then(function (data) {
          var profile = data[0],
            courseArr = data[1];

          if (!profile.email) {
            $q.all(courseArr.map(function (course) {
              var courseId = course.$id,
                courseTitle = course.title,
                courseLink = course.link,
                courseCat = course.category,
                courseRef = $firebaseObject(Ref.child('profiles').child(uid).child('courses').child(courseId));

              courseRef.link = courseLink;
              courseRef.title = courseTitle;
              courseRef.category = courseCat;
              courseRef.status = 'Not started';
              courseRef.repo = '';

              return courseRef.$save();
            })).then(function () {
              profileRef.email = user.email;
              profileRef.avatar = user.profileImageURL;
              profileRef.name = user.displayName;
              return profileRef.$save();
            });

          } else {
            console.log('Profile already exists');
          }
        });
      },

      getUserByUid: function (userUid) {
        return $firebaseObject(Ref.child('profiles').child(userUid));
      },

      githubLogin: function () {
        return Auth.$authWithOAuthPopup('github', {rememberMe: true}).then(function (data) {
          return Authentication.createProfile(data.uid, data.github);
        });
      },

      logout: function () {
        return Auth.$unauth();
      },

      getUserCourses: function (userUid) {
        return $firebaseArray(Ref.child('profiles').child(userUid).child('courses'));
      }
    };

    Auth.$onAuth(function (data) {
      if (data) {
        angular.copy(data, Authentication.user);
        Authentication.user.profile = $firebaseObject(Ref.child('profiles').child(data.uid));

      } else {
        if (Authentication.user && Authentication.user.profile) {
          Authentication.user.profile.$destroy();
        }
        angular.copy({}, Authentication.user);
      }
    });

    return Authentication;
  });
