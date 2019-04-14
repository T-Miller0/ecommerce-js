console.log(store);

$(document).ready(() => {

  store.stock.map((item,index) => {
    let productName = `<h1>${item.productName}</h1>`;
    let price = `<p>Price: ${item.price}</p>`;
    let inStock = checkStock(item.quantity);
    let buyButton = `<button attr-stock-index='${index}' class='buyButton'>Buy</button>`;
    $('#shop-list').append(`<div>${productName}${price}${inStock}${buyButton}</br></div>`);
  });


  $('.buyButton').click(() => {
    
    buy();
  })
});

function checkStock(quantity) {
  if ( quantity > 0 ) {
    return `<p class='inStock'>IN STOCK</h1>`;
  }
  return `<p class='noStock'>OUT OF STOCK</h1>`;
}

function buy() {
  let targetAttr = event.target.getAttribute("attr-stock-index");
  console.log(targetAttr);
}
