var iphonePrice = 80000;
var myBaget = 90000;
if (iphonePrice <= myBaget) {
  console.log("Iphone kinbo futani marbo");
}

var chickenPrice = 500;
var myMany = 50;
if (chickenPrice <= myMany) {
  console.log("Murgir Ran Khamu And Haddi Cibamu");
} else {
  console.log("Smashed potato and lebtuks soup");
}


// Handle Multiple Conditions, And Or
var isGraduated = true;
var salary = 40000;
var car = 0;
// and operator
if (isGraduated === true && salary >= 50000) {
  console.log("Eso Biye Kore Feli");
} else {
  console.log("Tor Kopale Biye Nai");
}

// or operator
if (isGraduated === true || salary >= 5000 || car >= 1) {
  console.log("Eso Prem Kori");
} else {
  console.log("Ja Tor Sathe Prem Korbo Na");
}

if ((isGraduated === true && salary >= 50000) || car >= 1) {
  console.log("Eso prem kori");
}else{
    console.log("Ja Tor Sathe Prem Korbo Na")
}


if (isGraduated === true && (salary >= 50000 || car >= 1)) {
  console.log("Eso prem kori");
}else{
    console.log("Ja Tor Sathe Prem Korbo Na")
}





// Multi Stage Condition 
var myMany = 35;
var butterBread = 40;
var toastBiscuit = 30;
var danis = 20;
if(myMany >= butterBread){
    console.log("Butter Bread Khabo !")
}else if(myMany >= toastBiscuit){
    console.log("Toast Biscuit Khabo !")
}else if(myMany >= danis){
    console.log("Danis Khabo !")
}else{
    console.log("Sudo Ca Khabo Ek Cap Ca Deo Mama")
}



// Nested Conditions
var math = true;
var geometry = true;
var bangla = true;
if(math){
  console.log("good you are good student")
  if(geometry){
    if(bangla){

    }else{
      
    }
  }else{

  }
}else{
  console.log("Your are bad student")
}