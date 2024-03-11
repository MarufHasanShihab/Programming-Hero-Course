function allNumberSumInArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
var numbers = [5, 7, 8, 10, 45, 30];
var allNumbersSum = allNumberSumInArray(numbers);
console.log(allNumbersSum);