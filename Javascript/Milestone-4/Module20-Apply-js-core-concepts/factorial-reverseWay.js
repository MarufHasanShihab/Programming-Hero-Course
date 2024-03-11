// factorial revers way 
// function factorial(num){
//     let result = 1;
//     for(var i = num; i >= 1; i--){
//         result *= i
//     }
//     return result;
// }

// const number = 7;
// const result = factorial(number);
// console.log("factorial of " + number + ": " + result)


// same work in use while loop
function factorial(num){
    let result = 1;
    let i = num
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}
const number = 9;
const result = factorial(number);
console.log("factorial of " + number + ": " + result)
