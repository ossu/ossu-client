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
    var Authentication = {
      user: {},

      createProfile: function (uid, user) {
        var profileRef = $firebaseObject(Ref.child('profiles').child(uid));

        profileRef.$loaded().then(function (profile) {
          if (!profile.email) {
            profileRef.email = user.email;
            profileRef.name = user.displayName;
            profileRef.avatar = user.profileImageURL;

            return profileRef.$save();
          } else {
            console.log('Profile already exists');
          }
        });
      },

      githubLogin: function () {
        return Auth.$authWithOAuthPopup('github', {rememberMe: true}).then(function (data) {
          return Authentication.createProfile(data.uid, data.github);
        });
      },

      logout: function () {
        return Auth.$unauth();
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
