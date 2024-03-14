const phones = [
    {name : "samsung", camera: 12, price: 50000, color: "sliver"},
    {name : "walton", camera: 8, price: 18000, color: "aqua"},
    {name : "itel", camera: 10, price: 15000, color: "sliver"},
    {name : "iphone", camera: 50, price: 100000, color: "sliver"},
    {name : "symphony", camera: 7, price: 10000, color: "black"},
    {name : "nokia", camera: 12, price: 25000, color: "red"},
]

function cheapastPhone(phones){
    let cheapast = phones[0];
    for(let phone of phones){
        if(phone.price < cheapast.price){
            cheapast = phone;
        }
    }
    console.log(cheapast)
}
const phone = cheapastPhone(phones);