// problem 1. feet to inch
function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}

const inches = feetToInch(5);
console.log(inches);


// problem 2. centimeter to meter
function centimeterToMeter(centimeter){
    const meter = centimeter * 0.01;
    return meter;
}
const meter = centimeterToMeter(50);
console.log(meter)


// problem 3.
function paperRequirments(book1Quantity, book2Quantity, book3Quantity){
    const book1PaperQuantity = 100;
    const book2PaperQuantity = 200;
    const book3PaperQuantity = 300;
    const book1TotalPaperQuantity = book1Quantity * book1PaperQuantity;
    const book2TotalPaperQuantity = book2Quantity * book2PaperQuantity;
    const book3TotalPaperQuantity = book3Quantity * book3PaperQuantity;
    const allBookTotalPaper = book1TotalPaperQuantity + book2TotalPaperQuantity + book3TotalPaperQuantity;
    return allBookTotalPaper;
}
const allBookTotalPaper = paperRequirments(2, 4, 2);
console.log(allBookTotalPaper);


// prbolem 4.
function bestFriend(friends){
    let friend = friends[0];
    for(let i = 0; i < friends.length; i++){
        if(friend.length < friends[i].length){
            friend = friends[i];
        }
    }
    return friend;
}

const friends = ["sajid", "chinku", "jubayer", "khaled saifullah", "abdullah al mamun"];
const friend = bestFriend(friends);
console.log(friend);


//  problem 5.
function onlyPositive(numbers){
    let positive = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            break;
        }else{
            positive.push(numbers[i])
        }
    }
    console.log(positive);
}
const numbers = [2, 4, 20, 6, 43, -8, 35, 32, 85];
const positive = onlyPositive(numbers)