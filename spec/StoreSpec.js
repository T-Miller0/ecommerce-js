describe("Store", function() {
  let newStore;

  beforeEach(function() {
    newStore = new Store();
  })

  it("has stock length of one", function() {
    expect(newStore.stock.length).toEqual(1)
  })
})
