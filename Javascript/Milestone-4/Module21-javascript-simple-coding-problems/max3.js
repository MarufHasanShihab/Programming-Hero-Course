const jim = 85;
const dela = 60;
const chinku = 95;
if (jim > dela && jim > chinku) {
  console.log("Jim will get the cake");
} else if (dela > jim && dela > chinku) {
  console.log("dela will get the cake");
} else{
  console.log("chinku will get the cake");
}



// same work using function
function getCake(jim, dela, chinku){
    if (jim > dela && jim > chinku) {
        console.log("Jim will get the cake");
      } else if (dela > jim && dela > chinku) {
        console.log("dela will get the cake");
      } else{
        console.log("chinku will get the cake");
      }
      
}
getCake(jim, dela, chinku);

console.log(Math.max(jim, dela, chinku));