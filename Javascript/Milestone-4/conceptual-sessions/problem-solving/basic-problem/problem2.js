/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/

function isJavaScriptFile(fileName){
    if(typeof fileName !== "string"){
        return "Please provide a vaild file naem (string)";
    }else{
       return fileName.toLowerCase().endsWith(".js")
    }
}

console.log(isJavaScriptFile("index.js"));


// same problem solve another way
function isJsFile(fileName){
    if(typeof fileName !== "string"){
        return "Please provide a vaild file naem (string)";
    }else{
        const arr = fileName.split(".");
        const lastElement = arr.pop();
        return lastElement.toLowerCase() === "js"
    }
}
console.log(isJsFile('hello.js'))