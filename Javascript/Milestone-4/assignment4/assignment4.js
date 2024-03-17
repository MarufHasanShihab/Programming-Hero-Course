/*  problem 1 -->
Tumake CubeNumber() name ekti function deya hoyeche function ta ekti positive number input nibe
tasks:
  1. input number ta ke cube kore result return korte hobe function theke
  2. Bunos : input hisibe number typer poriborte onno kichu dile tumi ekti meaningfull message return korbe function theke
 */
function CubeNumber(num) {
  if (typeof num !== "number") {
    return "please provide a valid number";
  } else if (num <= 0) {
    return "please provide me a positive number";
  } else {
    return num * num * num;
  }
}
console.log(CubeNumber(3));

/* 
problem 2 -->
tumakek ekti function deya hobe matchFinder() name ja input hisibe 2ti string nibe
tasks :
  1. jodi prothom stringtir kuno ekti ongser sathe ditio string ti    kuno ekti ongser puropuri mil khuje paoya jai tahole tumi return korbe true
  2. ar jodi puropuri mil khuje na pao tahole return korbe false
  3. Bonus: duti input string deya holo ki na seta validate korbe jodi doiti string ba jekuno ekti string na hoi tahole tumi ekti meaningfull message return korbe
 */
function matchFinder(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Both inputs must be strings.";
  } else {
    for (let chart of str1) {
      if (str2.includes(chart)) {
        return true;
      }
    }
    return false;
  }
}
console.log(matchFinder("jhon doe", "hon"));

/*
problem 3 -->
tumake ekti function likhte hobe jar name sortMaker() ei functiner perameter hobe ekti array and ei array te sobsomoy 2 ti upadan thakbe
tasks:
 1. jodi array er 2 ti upada positive songkha hoi sekhetre tumi array ti ke boro theke chuto crome sajiye return korbe
 2. jodi 2 ti songkha eki hoi sekhetre tumi string return korbe "equal"
 3. Bonus: jodi arrayr jekuno ekti upada songkha negitive hoi tahole tumi return korbe "invalid input" 
 */
function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return "Both input must be array.";
  } else if (arr[0] < 0 || arr[1] < 0) {
    return "invalid input";
  }
  if (arr[0] < arr[1]) {
    return arr.reverse();
  } else if (arr[0] > arr[1]) {
    return arr;
  }
  return "equal";
}
console.log(sortMaker([54, 54]));

/* 
problem 4-->
tumake ekti function deya hobe findAddress() ja input hisibe ekti object nibe object er 3ti porperty thakbe
thsks:
 1. tumake prothom simple output er format e output return korte hobe
 2. Bonus: jodi object er kuno porperty missing thake sekhetre sei ongsutoku dabule undersocre diye replace hobe(ditio output er format e)
 */
function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const socity = obj.socity || "__";
  return street + ", " + house + ", " + socity;
}
const obj = { street: 10, house: "15A", socity: "Earth Perfect" };
console.log(findAddress(obj));

/*
problem --> 5
tumi ekta dukane chips kinte gela kichu khusra nut niye ekta canpay() name function banao jeta 2ta input ney ekta array and ekta number
1. array er pottek ta element tumar kusra taka bojai
2. 2nd input ta bojai chips er dam
task:
 1. jodi kusra taka gulo jug kore chips er dam ba tar beshi hoi tahole true return korbe 
 2. ar jodi nut gulur jugfol chips er damer theke kom hoi tahole false return korbe
 3. inputer upadan empty array ki na chek korbe empty array hole ekti meaningfull message return korbe
 */
function canpay(arr, chipsPrice){
    if(arr.length === 0){
        return "please provide me a valid array"
    }
    let RetailMoneySum = 0;
    for(let tk of arr){
        RetailMoneySum += tk;
    }
    if(RetailMoneySum >= chipsPrice){
        return true;
    }else{
        return false;
    }
}

const arr = [1, 5, 5];
const chipsPrice = 10;
console.log(canpay(arr, chipsPrice));