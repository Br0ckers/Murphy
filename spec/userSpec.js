'use strict';

describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User('test@example.com', 'password');
  });

  it('it returns email attribute',function(){
    expect(user.getEmail()).toEqual('test@example.com');
  });

});
