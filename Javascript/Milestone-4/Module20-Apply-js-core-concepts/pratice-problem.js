// problem 1 . write a function that will take hour as the input parameter and will return the result in minitue
function getMinitue(hour) {
  const minitue = hour * 60;
  return minitue;
}
const hour = 3;
const minitue = getMinitue(hour);
console.log(minitue);

// problem 2. write a function findLeapYear() that will take ther array[2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030] as the input parameter and will check if each year is leap year insert that year in a new array retrun the new array print the result
function findLeapYear(years){
    let leapYear = [];
    for(let i = 0; i < years.length; i++){
        if(years[i] % 4 === 0){
            leapYear.push(years[i]);
        }
    }
    return leapYear;
} 

const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
const leapYear = findLeapYear(years);
console.log(leapYear);