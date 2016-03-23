'use strict';

describe('Directive: activeMenuPath', function () {

  // load the directive's module
  beforeEach(module('ossuClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<active-menu-path></active-menu-path>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activeMenuPath directive');
  }));
});
