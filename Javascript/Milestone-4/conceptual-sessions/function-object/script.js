// let and const
// let -> we can are assign value but can not declare it
// const -> we can not re-assign and re-declare value of it

// includes
// let myName = "Maruf Hasan Shihab";
// console.log(myName.includes("Hasan"));

// slice
// let animals = ["cat", "dog", "ant", "elephant", "duck"];
// console.log(animals.slice(1,4))

// splice
// console.log(animals.splice(2,2));
// console.log(animals)
// animals.splice(1, 0, "rat");
// animals.splice(2, 1, "rat");
// console.log(animals);

// Object
const person = {
  name: "Maruf Hasan Shihab",
  age: 18,
  Job: "Web Developer",
  address: "Sylhet, Bangladesh",
  phohne: "41410641106",
};
// access element in array
// dot notation
// console.log(person.name);

// bracket notation
// console.log(person["age"]);
// let address = "address";
// console.log(person[address]);

// just key access in object
// let keys = Object.keys(person);
// console.log(keys)

// just values access in object
// let values = Object.values(person);
// console.log(values);

// for (let key of keys) {
//   console.log(key);
// }

// for (let value of values) {
//   console.log(value);
// }


// for(let element in person){
    // console.log(element)
    // console.log(person[element])
//     console.log(element,":", person[element])
// }