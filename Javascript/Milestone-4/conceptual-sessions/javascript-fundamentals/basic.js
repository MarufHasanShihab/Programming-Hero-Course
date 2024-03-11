// console.log("hello world")l
// console.log(5);

// variable
// var x = 5;
// var y = "Hello World";
// console.log(x);

// variable naming convention

// valid name
// var x = 45;
// var name = "Maruf";
// var name2 = "Shihab";
// var $text = "Hello World";
// var my_name = "Maruf Hasan Shihab";

// invalid name =
// var 1name = "Maruf";
// var my-name = "maruf hasan shihab";\
// and reserved keywords

// data types
// var age = 20; // number
// var name = "Maruf"; // string
// var x = true; // boolean

// number conversions
// var a = "25.4565";
// var folting = parseFloat(a);
// console.log(folting)
// var integer = parseInt(folting);
// console.log(integer)
// var fixed = folting.toFixed(2);
// console.log(parseFloat(fixed))

// var x = 5;
// var y = 10;
// x = x + 5;
// var z = x + y;
// console.log(z);

// var x = 5;
// x = x + 5;
// shorthand
// x += 5;
// x++; // postIncrement
// ++x; // preIncrement

// preIncrement and postIncrement defrance
// var x = 5;
// console.log(x++); // age 5 print korteche than 5 er sathe 1 jug korteche
// console.log(++x); // age 5 er sathe ek jug korteche and jug kore result dekhaiteche

// Array
// var numbers = [10, 15, 20, 30];
// console.log(numbers.length);
// console.log(numbers[2]);
// var num1 = numbers[0];
// console.log(num1);

// var kuddus = ["sadia", "Nadia"];
// kuddus.push("Jorina");
// kuddus.push("Sokina");
// kuddus.push("Sumaiya");
// var ex = kuddus.pop();
// console.log(kuddus);
// kuddus.pop();
// kuddus.push("Mim");
// console.log(ex)
// console.log(kuddus);

// conditions
// var age = 18;
// if(age >= 18){
//     console.log("you are adult")
// }else{
//     console.log("your are not adult")
// }

// var myMarks = 65;
// if(myMarks >= 80){
//     console.log("your grade is A+")
// }else if(myMarks >= 70){
//     console.log("your grade is B");
// }else if(myMarks >= 60){
//     console.log("your grade is C")
// }else if(myMarks >= 50){
//     console.log("your grade is D")
// }else if(myMarks >= 40){
//     console.log("your grade is E")
// }else{
//     console.log("you are fail")
// }

// var temparature = 32;
// var isRunning = false;
// if(temparature > 30){
//     console.log("it is a hot day");
//     if(isRunning){
//         console.log("but is running")
//     }else{
//         console.log("and it is not running")
//     }
// }else{
//     console.log("it is could day")
//     if(isRunning){
//         console.log("but is running")
//     }else{
//         console.log("and it is not running")
//     }
// }

// loop
// while loop
// var i = 1;
// while (i < 10) {
//   console.log("Umm Sorry.....");
//   i++;
// }

// for loop
// for(var i = 0; i <= 10; i++){
//     console.log("Umm sorry.....")
// }



// var numbers = [ 53, 40, 63, 50, 74, 50, 83];
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// var x = 0;
// while(x < numbers.length){
//     console.log(numbers[x])
//     x++;
// }


// break statement
// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] === 50){
//         break
//     }
//     console.log(numbers[i])
// }


// continue statement
// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] === 50){
//         continue
//     }
//     console.log(numbers[i])
// }



// multiple conditions
// var isRaining = true;
// var umbrella = true;
// if(isRaining && umbrella){
//     console.log("bahire jabo ")
// }else{
//     console.log("bahire jabo na")
// }


// var isRaining = true;
// var umbrella = true;
// if(isRaining || umbrella){
//     console.log("bahire jabo ")
// }else{
//     console.log("bahire jabo na")
// }


// var x = 5;
// var y = 11;
// var z = x % y;
// console.log(z)



// ternary operator
// var isRaining = true;
// if(isRaining){
//     console.log("bahire jabo na")
// }else{
//     console.log("bahire jabo")
// }

// isRaining ? console.log("bahire jabo na") : console.log("bahire jabo")


// nexted conditions
var age = 25;
var licance = false;
// if(age >= 18){
//     if(licance){
//         console.log("adult with licance")
//     }else{
//         console.log("adult but not licance")
//     }
// }else{
//     console.log('not adult')
// }

age >= 18 ? licance ? console.log("adult with licance") : console.log("adult but not licance") : console.log('not adult')