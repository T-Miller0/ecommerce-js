const ShoppingCart = function() {
  this.cart = []

};

ShoppingCart.prototype.addToCart = function (item) {
  this.cart.push(item);
};
