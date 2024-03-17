function matchProducts(products,search){
    const matched = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    console.log(matched);
}

const products = [
    {name : "laptop apple", color : "silver", price : 76745},
    {name : "samsung alta Phone", color : "silver", price : 1095000},
    {name : "Mouse", color : "black", price : 1000},
    {name : "syphony phone y3", color : "silver", price : 76745},
    {name : "vivo y12 Phone ", color : "silver", price : 76745},
]
matchProducts(products, "phone");