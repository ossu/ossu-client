'use strict';

describe('Controller: MainmodalcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ossuClientApp'));

  var MainmodalcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainmodalcontrollerCtrl = $controller('MainmodalcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
