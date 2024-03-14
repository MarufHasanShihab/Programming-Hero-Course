const shopingCart =[
    {name: "shirt", price: 2500},
    {name: "pant", price: 3000},
    {name: "shoe", price: 1500},
    {name: "balt", price: 600},
];

function sum(shopingCart){
    let totalSum = 0;
    for(let i = 0; i < shopingCart.length; i++){
        totalSum += shopingCart[i].price
    }
    return totalSum;
}

const totalSum = sum(shopingCart)
console.log(totalSum);