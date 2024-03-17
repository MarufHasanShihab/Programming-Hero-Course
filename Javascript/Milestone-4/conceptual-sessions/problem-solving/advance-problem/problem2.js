/* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion
*/

// 3 => 3 + 2 + 1

// 3 + sumOfN(2)
// 3 + 2 + sumOfN(1)
// 3 + 2 + 1

function sumOfN(n){
    if(n === 1){
        return 1;
    }else{
        return n + sumOfN(n - 1); // 5 + 4 + 3 + 2 + 1 = 15
    }
}
console.log(sumOfN(5))



// Recursive function example
function sayHi(n){
    if(n === 1){
        return 1
    }
    console.log("Hi Iam Calling");
    sayHi(n - 1);
}
console.log(sayHi(10))