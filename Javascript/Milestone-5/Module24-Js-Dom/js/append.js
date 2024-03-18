const placeContainer = document.querySelector(".place-container");
const li = document.createElement("li");
li.innerText = "simul bagan";
placeContainer.appendChild(li);

const main = document.querySelector("main");
const section = document.createElement("section");
section.innerHTML = `
<h1>my fovarit countray</h1>
<ul class="countray-container">
    <li class="countray">Bangladesh</li>
    <li class="countray">Germany</li>
    <li class="countray">Sadi arbia</li>
    <li>shalban</li>
</ul>
`
main.appendChild(section);