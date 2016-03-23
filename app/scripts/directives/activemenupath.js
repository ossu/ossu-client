'use strict';

/**
 * @ngdoc directive
 * @name meetUpPlannerApp.directive:activeMenuLink
 * @description
 * # activeMenuLink
 */
angular.module('ossuClientApp')
  .directive('activeMenuPath', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var activeClass = 'active',
          path = attrs.activeMenuPath;

        scope.location = $location;

        scope.$watch('location.path()', function (newPath) {
          newPath = newPath.split('/')[1];
          return newPath === path ? element.addClass(activeClass) : element.removeClass(activeClass);
        });
      }
    };
  });
