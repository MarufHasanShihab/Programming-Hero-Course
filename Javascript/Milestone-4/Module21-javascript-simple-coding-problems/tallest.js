// write a funciton to get the largest number in an array
function maxNumberInArray(numbers){
    let largestNumber = numbers[0];
    for(let number of numbers){
        if(largestNumber < number){
            largestNumber = number;
        }
    }
    return largestNumber
}


const numbers = [167, 190, 120, 165, 137];
const tallest = maxNumberInArray(numbers);
console.log("larges Number is:", tallest);