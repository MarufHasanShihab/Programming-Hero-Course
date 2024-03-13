// write a funciton to get the lower number in an array
function minNumberInArray(numbers){
    let lowerNumber = numbers[0];
    for(let number of numbers){
        if(lowerNumber > number){
            lowerNumber = number;
        }
    }
    return lowerNumber
}


const numbers = [167, 190, 120, 165, 137];
const lower = minNumberInArray(numbers);
console.log("larges Number is:", lower);