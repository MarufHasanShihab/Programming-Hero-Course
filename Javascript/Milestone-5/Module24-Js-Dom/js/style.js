const sections = document.querySelectorAll("section");
for(let section of sections){
    section.style.border = "1px solid red";
    section.style.margin = "20px";
    section.style.padding = "10px";
    section.style.borderRadius = "15px";
    section.style.backgroundColor = "lightgray";
}


const fruitTitle = document.getElementById("fruit-title");
fruitTitle.classList.add("text-center");
fruitTitle.classList.remove("font-size");