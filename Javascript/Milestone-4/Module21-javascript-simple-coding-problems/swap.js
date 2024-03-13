let first = 5;
let secound = 7;
console.log(first, secound)

// this is wrong approach
// first = secound;
// secound = first;
// console.log(first, secound)

// approach 1
let temp = first;
first = secound;
secound = temp;
console.log(first, secound);approach

// approach 2 
[first, secound] = [secound, first];
console.log(first, secound);