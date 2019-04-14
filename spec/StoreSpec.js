describe("Store", function() {
  let newStore;

  beforeEach(function() {
    store = new Store();
  })

  it("has stock length of one", function() {
    expect(store.stock.length).toEqual(13)
  })


})
