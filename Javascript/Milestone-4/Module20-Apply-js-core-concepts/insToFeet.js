// const myIns = 65;
// const myFeet = myIns / 12;
// console.log(myFeet);

// const dadaIns = 60;
// const dadaFeet = dadaIns / 12;
// console.log(dadaFeet);

// const dadiIns = 50;
// const dadiFeet = dadiIns / 12;
// console.log(dadiFeet)


// With the same work function
function insToFeetConvert(person,ins){
    const feet = ins / 12;
    const result = person + " Feet is: " + feet;
    return result;
}

const myIns = 65;
const myFeet = insToFeetConvert("My", myIns);
console.log(myFeet)

const dada = 60;
const dadaFeet = insToFeetConvert("Dada", dada);
console.log(dadaFeet);

const dadi = 50;
const dadiFeet = insToFeetConvert("Dadi", dadi);
console.log(dadiFeet);