// pratice problem 1 => harry's  mum give him money and asked him to buy some orange and apples write a program to help Harry calculate how much money the shopkeeper all return
var motherGiveMany = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;
var remainingMany = motherGiveMany - totalPrice;
console.log(remainingMany);

// pratic problem 2 => write a program to calculate the average marks of mathematics Biology chemistry Physics and Bangla of student
var matheMatics = 75.25;
var biology = 65;
var chemisty = 80;
var physics = 35.45;
var bangla = 99.5;
var allSubjectMarksSum = matheMatics + biology + chemisty + physics + bangla;
var averageMarks = allSubjectMarksSum / 5;
var towDecimal = averageMarks.toFixed(2)
console.log(towDecimal);

// pratice problem 3 => John's teacher gave him tow variables each variable contains a string jons teacher asked him to combine these two string and print them in one line help John write the program
var firstText = "Iam going to be";
var secoundText = "an awsome web developer";
var fullText = firstText + " " + secoundText;
console.log(fullText);

// pratice problem 4 => Shahada mother is teaching her mathematics she give Sahara number and ask her what the reminder old be share she divided the number help Sahara write the program
var inputNumber = 119;
var result = inputNumber % 5;
console.log(result);
