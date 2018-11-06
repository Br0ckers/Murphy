'use strict'

describe('Space', function() {
  var space;

  beforeEach(function() {
    space = new Space('The loft','Nice cosy attic room', 99.99);
  });

  it('Space has name', function() {
    expect(space.getName()).toEqual('The loft')
  });

  it('Space has description', function() {
    expect(space.getDescription()).toEqual('Nice cosy attic room')
  });

  it('Space has price', function() {
    expect(space.getPrice()).toEqual(99.99)
  });
});
