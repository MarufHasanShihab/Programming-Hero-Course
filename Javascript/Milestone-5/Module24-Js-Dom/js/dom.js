// option 1: getElementsByTagName
const liList = document.getElementsByTagName('li');
for(let li of liList){
    // console.log(li)
    // console.log(li.innerText)
}

// option 2: getElementsByClassName
const places = document.getElementsByClassName('place');
for(let place of places){
    // console.log(place)
    console.log(place.innerText)
}

// option 3: getElementById
const fruitTitle = document.getElementById("fruit-title");
console.log(fruitTitle);
console.log(fruitTitle.innerText);
fruitTitle.innerHTML = "fruit title change in js"


// option 4: querySelector
const fruitsTitle = document.querySelector("#fruit-title");
console.log(fruitTitle);

const fruitContainer = document.querySelector(".fruit-container li");
console.log(fruitContainer);


// option 5 querySelectorAll
const placeList = document.querySelectorAll(".place");
console.log(placeList)
for(let place of placeList){
    console.log(place.innerText);
}
