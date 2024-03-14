const names = ["babul", "cabul", "dabul", "eabul", "fabul", "gabul", "habul", "babul", "dabul", "iabul", "gabul", "babul", "babul", "gabul", "habul"];

function removeDuplicatesName(names){
    const uniqueNames = [];
    for(let i = 0; i < names.length; i++){
        if(uniqueNames.includes(names[i]) === false){
            uniqueNames.push(names[i]);
        }
    }
    return uniqueNames;
}

const uniqueNames = removeDuplicatesName(names);
console.log(uniqueNames)