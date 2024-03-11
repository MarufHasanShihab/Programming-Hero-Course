function sum(a, b) {
  var add = a + b;
  return add;
}
var total = sum(150, 50);
console.log(total);



function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity
}

var myMoney = 150;
var singaras = bringSingara(myMoney);
console.log(singaras);




function getMarks(assignment1, assignment2, assignment3){
    var assignmentMarksSum = assignment1 + assignment2 + assignment3;
    var averageMarks = assignmentMarksSum / 3;
    return averageMarks;
}

var assignment1Marks = 55;
var assignment2Marks = 54;
var assignment3Marks = 60;
var assignmentAverageMarks = getMarks(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(assignmentAverageMarks);



function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}
var result1 = add(12, 38);
var result2 = add(27, 75);
var totalResult = add(result1, result2);
console.log(totalResult);