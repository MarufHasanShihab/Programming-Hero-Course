// js dom events
// option 1 : directly set on the html element

// option 2 : add onCLick function
function makeYellow(){
    document.body.style.backgroundColor = "yellow";
}

// option 3 : 
const makeRedButton = document.getElementById("makeRed");
makeRedButton.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = "red";
}

// option 3: antother option
const makePurpleButton = document.getElementById("makePurple");
makePurpleButton.onclick = function(){
    document.body.style.backgroundColor = "purple";
}

// option 4:
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.addEventListener("click", makeBlue);
function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

// option 4 antoher :
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
})

// option 4 final option
const makePinkButton = document.getElementById("make-pink").addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";
})

