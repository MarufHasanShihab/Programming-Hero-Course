var shoppingCart = {
    book : 3, 
    sunglass: 15,
    keyboard: 2,
    mouse: 5,
    pen: 10
}

// get value in object 
console.log(shoppingCart.keyboard);
console.log(shoppingCart["sunglass"]);
var pen = "pen";
console.log(shoppingCart[pen]);



// set value in object 
shoppingCart.keyboard = 4;
console.log(shoppingCart);
shoppingCart["pen"] = 20;
console.log(shoppingCart);
var sunglass = "sunglass";
shoppingCart[sunglass] = 30;
console.log(shoppingCart);