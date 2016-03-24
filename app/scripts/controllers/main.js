'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('MainCtrl', function ($scope, $location, User) {
    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }

    $scope.categories = [
      'Introduction to Computer Science',
      'Math (Mathematical Thinking)',
      'Program Design',
      'Math (Discrete Math)',
      'Algorithms',
      'Programming Paradigms',
      'Software Testing',
      'Math (Calculus)',
      'Software Architecture',
      'Theory',
      'Software Engineering',
      'Math (Probability)',
      'Computer Architecture',
      'Operating Systems',
      'Computer Networks',
      'Databases',
      'Cloud Computing',
      'Math (Linear Algebra)',
      'Cryptography',
      'Security',
      'Compilers',
      'Parallel Computing',
      'UX Design',
      'Computer Graphics',
      'Artificial Intelligence',
      'Machine Learning',
      'Natural Language Processing',
      'Big Data',
      'Data Mining',
      'Internet of Things'
    ];

    $scope.githubLogin = function () {
      $scope.err = null;
      User.githubLogin().then(redirect, showError);
    };

  });
