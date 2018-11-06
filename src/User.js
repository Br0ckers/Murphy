'use strict';

function User(email, password){
  this.email = email;
  this.password = password;
}

User.prototype.getEmail = function() {
  return this.email;
};
