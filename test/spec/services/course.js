'use strict';

describe('Service: Course', function () {

  // load the service's module
  beforeEach(module('ossuClientApp'));

  // instantiate service
  var Course;
  beforeEach(inject(function (_Course_) {
    Course = _Course_;
  }));

  it('should do something', function () {
    expect(!!Course).toBe(true);
  });

});
