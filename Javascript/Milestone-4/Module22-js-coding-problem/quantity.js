const shopingCart =[
    {name: "shirt", price: 2500, quantity: 5},
    {name: "pant", price: 3000, quantity: 3},
    {name: "shoe", price: 1500, quantity: 2},
    {name: "balt", price: 600, quantity: 2},
];

function sum(shopingCart){
    let totalSum = 0;
    for(let i = 0; i < shopingCart.length; i++){
        let product = shopingCart[i];
        let totalProduct = product.price * product.quantity;
        totalSum += totalProduct;
    }
    return totalSum;
}

const totalSum = sum(shopingCart);
console.log(totalSum);