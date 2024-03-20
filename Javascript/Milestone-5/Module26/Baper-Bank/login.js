document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    const emailField = document.getElementById("user-email");
    const passwordField = document.getElementById("user-password");
    if(emailField.value === "bap@sontan.com" && passwordField.value === "baperBank"){
        location.href = "bank.html";
    }else if(emailField.value !== "bap@sontan.com" && passwordField.value !== "baperBank"){
        alert("Both your email and password are incorrect. Please try again with the correct email and password")
    }else if(emailField.value !== "bap@sontan.com"){
        alert("Your email is incorrect. Please try again with the correct email")
    }else if(passwordField.value !== "baperBank"){
        alert("Your password is incorrect. Please try again with the correct password");
    }
})
