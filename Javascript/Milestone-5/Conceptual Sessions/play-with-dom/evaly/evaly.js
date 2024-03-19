 const userReview = document.getElementById("user-review")
 function addReview(){
    const textArea = document.querySelector("textarea");
    const textAreaValue = textArea.value;
    const li = document.createElement("li");
    const liText =  li.innerText = textAreaValue
    if(liText.length > 1){
        userReview.appendChild(li);
    }
    setData()

    textArea.value = "";
}


document.querySelector("textarea").addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addReview();
        setData();
    }
})

userReview.addEventListener("click", function(e){
    e.target.parentNode.removeChild(e.target);
    setData();
})

function setData (){
    localStorage.setItem("data", userReview.innerHTML);
  }
  
  function getData (){
    userReview.innerHTML = localStorage.getItem("data")
  }
  getData();