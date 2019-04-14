describe("ShoppingCart", function() {
  let shoppingCart;

  beforeEach(function() {
    shoppingCart = new ShoppingCart();
  })

  it("has stock length of is empty", () => {
    expect(shoppingCart.cart.length).toEqual(0)
  });

  it('the correct item is in the cart', () => {
    const shoes = { productName: 'pumps'}
    shoppingCart.addToCart(shoes);
    expect(shoppingCart.cart.includes(shoes)).toEqual(true);
    expect(shoppingCart.cart.length).toEqual(1)
  })

  it('removes item from cart', () => {
    const shoes = { productName: 'pumps'}
    shoppingCart.addToCart(shoes);
    shoppingCart.removeItemFromCart(shoes)
    expect(shoppingCart.cart.length).toEqual(0)
  })

  it('Calculates cartTotal from product prices', () => {
    const shoes = { productName: 'pumps', price: 5}
    const shirt = { productName: 'black shirt', price: 10}
    shoppingCart.addToCart(shoes);
    shoppingCart.addToCart(shirt);
    shoppingCart.cartTotal()
    expect(shoppingCart.total).toEqual(15)
  });

  it('Calculates voucher for 15off', () => {
    const shoes = { productName: 'pumps', price: 100, category: "Men's Footwear"}
    shoppingCart.addToCart(shoes);
    shoppingCart.cartTotal()
    shoppingCart.addVoucher("15off")

    expect(shoppingCart.total).toEqual(85)
  });

  it('Calculates voucher for 10off', () => {
    const shoes = { productName: 'pumps', price: 60, category: "Men's Footwear"}
    shoppingCart.addToCart(shoes);
    shoppingCart.cartTotal()
    shoppingCart.addVoucher("10off")

    expect(shoppingCart.total).toEqual(50)
  });

  it('Calculates voucher for 5off', () => {
    const shoes = { productName: 'pumps', price: 20, category: "Men's Footwear"}
    shoppingCart.addToCart(shoes);
    shoppingCart.cartTotal()
    shoppingCart.addVoucher("5off")

    expect(shoppingCart.total).toEqual(15)
  });
})
