// function Inventory () {
//   var allSpaces = []
// }
//
// Inventory.prototype.listSpaces = function () {
//
// }

function Space (name, description, price) {
this.name = name
this.description = description
this.price = price
// Inventory.allSpaces.push(this)
}

Space.prototype.getName = function () {
  return this.name
}

Space.prototype.getDescription = function () {
  return this.description
}

Space.prototype.getPrice = function () {
  return this.price
}
