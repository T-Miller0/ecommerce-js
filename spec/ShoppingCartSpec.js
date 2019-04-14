describe("ShoppingCart", function() {
  let shoppingCart;

  beforeEach(function() {
    shoppingCart = new ShoppingCart();
  })

  it("has stock length of is empty", function() {
    expect(shoppingCart.cart.length).toEqual(0)
  });

  it('the correct item is in the cart', () => {
    const shoes = { productName: 'pumps'}
    shoppingCart.addToCart(shoes);
    expect(shoppingCart.cart.includes(shoes)).toEqual(true);
    expect(shoppingCart.cart.length).toEqual(1)
  })
})

//i wanna be able to delete from my cart, to check this i expect the deleted item not ot be there.
// 
