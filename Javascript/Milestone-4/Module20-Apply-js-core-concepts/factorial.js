// Factorial
function factorial(num){
    let multiplication = 1;
    for(let i = 1; i <= num; i++){
        multiplication *= i;
    }
    return multiplication;
}

const multiplication = factorial(7);
console.log(multiplication);