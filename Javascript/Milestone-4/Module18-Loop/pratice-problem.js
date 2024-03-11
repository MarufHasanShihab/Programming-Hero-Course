// Loop in js
// 1. Display Ajke Amar Mon Valo Nai for 39 times
for(var i = 1; i <= 39; i++){
    console.log(i + ". Ajke Amar Mon Valo Nai")
}

// 2. Display Number Between 58 to 98
var num1 = 58;
while(num1 <= 98){
    console.log(num1)
    num1++;
}

// 3. Show all even number from 412 to 456
for(var i = 412; i <= 456; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// 4. Show all even number from 581 to 523
var num2 = 581;
while (num2 <= 623) {
  if (num2 % 2 === 1) {
    console.log(num2);
  }
  num2++;
}

// 5. Declare an array for all the topics to last few days display  then as output
var allTopics = ['HTML', 'CSS', 'bootstrap', "Tailwind"];
for(var i = 0; i < allTopics.length; i++){
    console.log(allTopics[i]);
}

// 6. create an array fot all the mobile phones
var allMobilePhone = ["Symphony", "Samsung", "iphone", "Huawei", "vivo"];
var x = 0;
while(x < allMobilePhone.length){
    console.log(allMobilePhone[x])
    x++;
}

// 7. run a loop from 30 to 86 this loop will stop if the value get higher than 44
for (var i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  console.log(i);
}


// 8. write the price of the books taht you have display the prices if the prices to lower than prices
var bookPrices = [150, 382, 213, 270, 200, 326, 70, 250];
for(var i = 0; i < bookPrices.length; i++){
    if(bookPrices[i] > 200){
        continue;
    }
    console.log(bookPrices[i]);
}