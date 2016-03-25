'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('ProfileCtrl', function ($scope, $routeParams) {
    var userUid = $routeParams.userUid;

    console.log(userUid);
  });
