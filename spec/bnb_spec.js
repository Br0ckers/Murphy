'use strict'

describe('Bnb', function() {
  var bnb;

  beforeEach(function() {
    bnb = new Bnb();
  });

  it('bnb has spaces to book = 1 space', function() {
    bnb.saveSpaces([{id: "6", owner_id: "3", space_name: "a", space_desc: "a", price_per_night: "22"}])
    expect(bnb.getSpaces().length).toEqual(1)
  });

  it('bnb has spaces to book = 2 spaces', function() {
    bnb.saveSpaces([{id: "6", owner_id: "3", space_name: "a", space_desc: "a", price_per_night: "22"}])
    bnb.saveSpaces([{id: "7", owner_id: "3", space_name: "a", space_desc: "a", price_per_night: "22"}])
    expect(bnb.getSpaces().length).toEqual(2)
  });


});
