'use strict';

/**
 * @ngdoc function
 * @name ossuClientApp.controller:CurriculumCtrl
 * @description
 * # CurriculumCtrl
 * Controller of the ossuClientApp
 */
angular.module('ossuClientApp')
  .controller('CurriculumCtrl', function ($scope, Course) {
    $scope.courses = null;

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

    Course.getCourses().$loaded().then(function(data){
      $scope.courses = data;
    })



  });
