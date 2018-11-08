
function Bnb (name, description, price) {

this.spaces = []
}

Bnb.prototype.saveSpaces = function (space) {

  this.spaces.push(space)


};

Bnb.prototype.getSpaces = function () {

  return this.spaces


};
