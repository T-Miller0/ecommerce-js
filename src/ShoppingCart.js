const ShoppingCart = function() {
  this.cart = []
  this.total = 0
};

ShoppingCart.prototype.addToCart = function (item) {
  this.cart.push(item);
};

ShoppingCart.prototype.removeItemFromCart = function (item) {
  this.cart.splice(item)
};

ShoppingCart.prototype.cartTotal = function() {
  let prices = this.cart.map(item => {
  return item.price;
  })

  this.total = prices.reduce((grandTotal, currentValue) => grandTotal + currentValue )
};
