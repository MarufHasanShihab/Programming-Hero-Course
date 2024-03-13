function wordReverse(str){
    const words = str.split(' ');
    const reversWord = [];
    for(let i = words.length - 1; i >= 0; i--){
        reversWord.push(words[i]);
    }
    return reversWord;
}

const myString = "I am good boy";
const reversWord = wordReverse(myString);
console.log(reversWord)