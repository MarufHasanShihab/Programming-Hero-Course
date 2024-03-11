// 1. write a function called make_aveg() whic will take an three integers retrun the average of those values ?
function average(math, chemisty, vaiology, bangla) {
  var allSubjectMarusSum = math + chemisty + vaiology + bangla;
  var averageMarks = allSubjectMarusSum / 4;
  return averageMarks;
}

var math = 75;
var chemisty = 60.21;
var vaiology = 45;
var bangla = 95;
var averageMarks = average(math, chemisty, vaiology, bangla);
console.log(parseFloat(averageMarks.toFixed(2)));

// 2. write a function called make_aveg() whic will take an of array integers and the size of that  retrun the average of  those values
function numbersAverage(arr){
  var count = 0;
    for(var i = 0; i < arr.length; i++){
         count += arr[i];
    }
    var average = count / arr.length;
    return average;
}

var numbers = [23, 53, 64, 62, 73, 21, 34, 92];
var allNumbersAverage = numbersAverage(numbers);
console.log(allNumbersAverage);


// 3. write a function called odd_even() which takes and integer value and tells wether this value is even or odd. you need to do it in 4 ways
function oddEven(num){
  if(num % 2 === 0){
    return "Your Number is Even Number"
  }else if(num % 2 === 1){
    return "Your Number is Odd Number"
  }
}

var number = oddEven(10)
console.log(number)


// 5. you are in a hurry to go to your school on time. but when you are crossing the road, the traffic singnal is red clolored. in this situation, if you try to cross the road, you may be in danger if you notice a yellow coloured traffic signal, you should stop. if you notice a green coloured traffic signal, you should cross the road. so write a js code, where there is a variable called signal. it value can be green, yellow or red  & we will get different activities as output depending on the variable. so, hurry up
var singnalColor = "green";
switch(singnalColor){
  case "red":
    console.log('If you try to cross the road in this condition, you may be in danger if you notice the yellow traffic signal, you have to stop.');
  break;
  case "green":
    console.log('You have to cross the road.');
}