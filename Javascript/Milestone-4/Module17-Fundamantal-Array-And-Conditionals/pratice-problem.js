// problem 1
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
var fruits = ["Apple", "Banana", "Orange"];
var banaIndex = fruits.indexOf("Banana");
console.log(banaIndex)
fruits[1] = "Mango";
console.log(fruits);

// b) Remove ‘Orange’ and add ‘Watermelon’.
fruits.pop();
fruits.push("Watermelon");
console.log(fruits)


// problem 2
/* 
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.
*/
var myMarks = 85;
var tomsMarks = 66;
var janeMarks = 95;
var peterMarks = 56;

// My Grade 
if(myMarks >= 80){
    console.log("My Grade: A Grade")
}else if(myMarks >=  60){
    console.log("My Grade: B Grade")
}else if(myMarks >= 50){
    console.log("My Grade: C Grade")
}else if(myMarks >= 40){
    console.log("My Grade: D Grade")
}else{
    console.log("My Grade: F")
}

// Toms Grade 
if(tomsMarks >= 80){
    console.log("Toms Grade: A Grade")
}else if(tomsMarks >=  60){
    console.log("Toms Grade: B Grade")
}else if(tomsMarks >= 50){
    console.log("Toms Grade: C Grade")
}else if(tomsMarks >= 40){
    console.log("Toms Grade: D Grade")
}else{
    console.log("Toms Grade: F")
}


// Jane Grade 
if(janeMarks >= 80){
    console.log("Jane Grade: A Grade")
}else if(janeMarks >=  60){
    console.log("Jane Grade: B Grade")
}else if(janeMarks >= 50){
    console.log("Jane Grade: C Grade")
}else if(janeMarks >= 40){
    console.log("Jane Grade: D Grade")
}else{
    console.log("Jane Grade: F")
}

// Pter Grade 
if(peterMarks >= 80){
    console.log("Peter Grade: A Grade")
}else if(peterMarks >=  60){
    console.log("Peter Grade: B Grade")
}else if(peterMarks >= 50){
    console.log("Peter Grade: C Grade")
}else if(peterMarks >= 40){
    console.log("Peter Grade: D Grade")
}else{
    console.log("Peter Grade: F")
}


// Problem 3
/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
*/
var number1 = 13;
var number2 = 79;
var number3 = 45;
if(number1 > number2 && number1 > number3){
    console.log("Big Number is " + number1)
}else if(number2 > number1 && number2 > number3){
    console.log("Big Number is " + number2)
}else if(number3 > number1 && number3 > number2){
    console.log("Big Number is " + number3)
}