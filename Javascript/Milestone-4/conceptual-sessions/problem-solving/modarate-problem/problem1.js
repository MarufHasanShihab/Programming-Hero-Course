/*
তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

function findingBadData(numbers){
    if(!Array.isArray(numbers)){
        return "please provide a valid array"
    }else{
        let badData = 0;
        for(let i = 0; i <numbers.length; i++){
            if(typeof numbers[i] !== 'number'){
                return "please provide me an array of number"
            }else{
                if(numbers[i] <= 0){
                    badData ++;
                }
            }
        }
        return badData;
    }
}

const numbers = [53, -45, 62, -64, -18, 32, 88, -90];
console.log(findingBadData(numbers));