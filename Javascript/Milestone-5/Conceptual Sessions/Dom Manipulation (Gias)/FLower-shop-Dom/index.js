// finding element
const selectedTtems = document.getElementById("selected-items");
let toTal = document.getElementById("total");
// handle click btn
function handleCLikBtn(target) {
  const iteamTitle = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = iteamTitle;
  selectedTtems.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  toTal.innerText = parseFloat(toTal.innerText) + parseFloat(price);
  setData();
}