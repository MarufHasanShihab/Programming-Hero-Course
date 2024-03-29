/*
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5

*/

function mineGame(number){
    if(typeof number !== "number"){
        return "please provide a valid number"
    }else if(number <= 0){
        return "please provide a positive number";
    }else{
        return (((number * 3)+10)/2)-5;
    }
}
console.log(mineGame(5));