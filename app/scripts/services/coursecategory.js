'use strict';

/**
 * @ngdoc service
 * @name ossuClientApp.courseCategory
 * @description
 * # courseCategory
 * Factory in the ossuClientApp.
 */
angular.module('ossuClientApp')
  .factory('courseCategory', function (Ref, $firebaseArray) {
    var categoriesRef = Ref.child('courseCategories');

    var Categorie = {
      getCategories: function () {
        return $firebaseArray(categoriesRef);
      }
    };

    return Categorie;

  });
