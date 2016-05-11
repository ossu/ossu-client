'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('MainCtrl', function (localStorageService, $uibModal) {

    function checkLocalStorage(key) {
      return localStorageService.get(key);
    }

    function setLocalStorage(key, value) {
      localStorageService.set(key, value);
    }

    var openedModalKey = '653c5f9';

    if (!checkLocalStorage(openedModalKey)) {
      $uibModal.open({
        animation: true,
        backdrop: 'static',
        controller: 'MainmodalcontrollerCtrl',
        templateUrl: '../partials/modal.html',
        size: 'lg'
      });

      setLocalStorage(openedModalKey, true);
    }


  });
