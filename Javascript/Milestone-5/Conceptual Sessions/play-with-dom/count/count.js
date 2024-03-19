let count = 0;
document.getElementById("count-increment-btn").addEventListener("click", function(){
    count++;
    document.getElementById("count-decriment-btn").removeAttribute("disabled", true)
    
    document.getElementById("count").innerText = count
})
function decriment(){
    count--;
    if(count === 0){
        document.getElementById("count-decriment-btn").disabled = true
    }
    document.getElementById("count").innerText = count
}