'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.user
 * @description
 * # user
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('User', function ($log, $timeout, $q, $firebaseObject, Ref, Auth) {
    var User = {};

    function createProfile(user) {
      var profile = $firebaseObject(Ref.child('profiles/' + user.uid));

      return profile.$loaded().then(function (profileData) {

        if (!profileData.email) {
          profile.email = user.github.email;
          profile.name = user.github.displayName;
          profile.avatar = user.github.profileImageURL;

          return profile.$save();
        } else {
          console.log('User already exists');
        }
      });
    }

    User.githubLogin = function () {
      return Auth.$authWithOAuthPopup('github', {rememberMe: true}).then(createProfile);
    };

    User.getUserProfile = function (userId) {
      return $firebaseObject(Ref.child('profiles/' + userId));
    };

    return User;
  });
