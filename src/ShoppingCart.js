const ShoppingCart = function() {
  this.cart = []
  this.total = 0
  this.vouchersUsed = null;
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

ShoppingCart.prototype.applyVoucher = function (voucher, categoryFound) {
  switch (voucher) {
    case '15off':
      if (this.total > 75 && categoryFound) {
        this.total -= 15
        this.vouchersUsed = '15off'
      }
      break;
    case '10off':
      if (this.total > 50) {
        this.total -= 10
        this.vouchersUsed = '10off'
      }
      break;
    case '5off':
      this.total -= 5
      this.vouchersUsed = '5off'
    default:
    return "Voucher Not Found"
    }
};

ShoppingCart.prototype.addVoucher = function (voucher) {
  let categories = this.cart.map(item => {return item.category})
  let categoryFound = function() {
    if (categories.includes("Women's Footwear") || categories.includes("Men's Footwear")) {
      return true;
    }
    return false;
  }
  if (this.vouchersUsed === null) {
    this.applyVoucher(voucher, categoryFound)
  }
};
const shoppingCart = new ShoppingCart();
