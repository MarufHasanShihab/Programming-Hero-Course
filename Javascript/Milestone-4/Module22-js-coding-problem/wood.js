/* 
fixed: per iteam wood requirmant
1. chair --> 3 cft
2. tabile --> 10 cft
3. bed --> 50 cft
 */
function woodCalculator(chairQuantity, tabileQuantity, bedQuantity){
    const chairWood = 3;
    const tabileWood = 10;
    const bedWood = 50;
    const totalChariWood = chairQuantity * chairWood;
    const totalTabileWood = tabileQuantity * tabileWood;
    const totalBedWood = bedQuantity * bedWood;
    const totalWood = totalChariWood + totalTabileWood + totalBedWood;
    return totalWood;
}

const chairQuantity = 5;
const tabileQuantity = 2;
const bedQuantity = 1;
const totalWood = woodCalculator(chairQuantity, tabileQuantity, bedQuantity);
console.log(totalWood);