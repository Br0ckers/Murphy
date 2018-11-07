'use strict'

describe('Bnb', function() {
  var bnb;

  beforeEach(function() {
    bnb = new Bnb();
  });

  it('bnb has spaces to book', function() {
    bnb.saveSpaces()
    expect(bnb.getSpaces()).toEqual('The loft')
  });


});
