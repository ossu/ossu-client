'use strict';

describe('Controller: CurriculumCtrl', function () {

  // load the controller's module
  beforeEach(module('ossuClientApp'));

  var CurriculumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurriculumCtrl = $controller('CurriculumCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
