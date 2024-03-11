// write a function findOddSum() that will take the array[5, 7, 8, 10, 45, 30] as the input parameter and wil return the sum of the odd numbers
function findOddNumberSum(arr) {
  let oddNumberSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNumberSum += arr[i];
    }
  }
  return oddNumberSum;
}

const numbers = [5, 7, 8, 10, 45, 30];
const oddNumbersSum = findOddNumberSum(numbers);
console.log(oddNumbersSum);
