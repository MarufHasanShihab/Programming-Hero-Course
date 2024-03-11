var shoppingCart = {
  book: 3,
  sunglass: 15,
  keyboard: 2,
  mouse: 5,
  pen: 10,
};

var keys = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);
for (var i = 0; i < keys.length; i++) {
  console.log(keys[i], ": ", values[i]);
}

for (var iteam in shoppingCart) {
  console.log(iteam);
}
