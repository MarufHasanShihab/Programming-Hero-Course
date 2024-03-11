// function bringSngara(money){
//     console.log(money)
// }
// bringSngara(1000);

function bringSingara(money) {
  var singaraPrice = 5;
  console.log(
    `ei nen apnar ${money} taka dichen apnar ${money} takar singra hocche ${
      money / singaraPrice
    }`
  );
}
bringSingara(200);

// one way perameter
function sum(a, b, c, d, e) {
  var add = a + b + c + d + e;
  console.log(add)
}
sum(1, 2, 3, 4, 5);
