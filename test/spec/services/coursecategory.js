'use strict';

describe('Service: courseCategory', function () {

  // load the service's module
  beforeEach(module('ossuClientApp'));

  // instantiate service
  var courseCategory;
  beforeEach(inject(function (_courseCategory_) {
    courseCategory = _courseCategory_;
  }));

  it('should do something', function () {
    expect(!!courseCategory).toBe(true);
  });

});
