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
    console.log(shoppingCart.cart)
    shoppingCart.cartTotal()
    expect(shoppingCart.total).toEqual(15)
  })
