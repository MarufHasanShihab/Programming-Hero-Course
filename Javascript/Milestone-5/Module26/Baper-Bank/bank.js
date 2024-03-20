// finding deposit and withdraw and balance amount element
const deopositTotal = document.getElementById("deposit-total");
const deopositBalance = document.getElementById("deposit-Balance");
const withDrawAmount = document.getElementById("withdraw-amount");

// deoposit
document.querySelector("#deposit-form").addEventListener("submit", function(e){
    e.preventDefault();
    // Deposite total
    const depositInputField = document.getElementById("deposit-input-field");
    const newDepositTotal = parseFloat(depositInputField.value);
    const previousDepositTotal = parseFloat( deopositTotal.innerText);
    const totalDeposit = newDepositTotal + previousDepositTotal;
    deopositTotal.innerText = totalDeposit;
    // deposite balance total
    const previousDepositeBlance = parseFloat(deopositBalance.innerText);
    const totalDepositBalance = previousDepositeBlance + newDepositTotal;
    deopositBalance.innerText = totalDepositBalance;
    setData()
    getData();
    depositInputField.value = "";
})

// withdraw
document.getElementById("withdraw-form").addEventListener("submit", function(e){
    e.preventDefault();
    const withdrawInputField = document.getElementById("withdraw-input-field");
    const newWithdrawAmount = parseFloat(withdrawInputField.value);
    const previousDepositeBlance = parseFloat(deopositBalance.innerText);
    const previousWithdrawAmount = parseFloat(withDrawAmount.innerText);
    withdrawInputField.value = "";
    if(previousDepositeBlance < newWithdrawAmount){
        alert("Apnar Accounte " + newWithdrawAmount + " taka nai");
        return;
    }
    const totalBalance = previousDepositeBlance - newWithdrawAmount;
    deopositBalance.innerText = totalBalance;
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withDrawAmount.innerText = totalWithdraw;
    setData();
})

// set localStorage data
function setData(){
    localStorage.setItem("totalDeposite", parseFloat(deopositTotal.innerText) );
    localStorage.setItem("totalDepositeBalance", parseFloat(deopositBalance.innerText));
    localStorage.setItem("totalWithdraw", parseFloat(withDrawAmount.innerText));
}

// get localStorage data
function getData(){
    if(localStorage.getItem("totalDepositeBalance") && localStorage.getItem("totalDepositeBalance")){
        const totalDeposite = parseFloat(localStorage.getItem("totalDeposite"));
    deopositTotal.innerText = totalDeposite;
    const totalDepositeBalance = parseFloat(localStorage.getItem("totalDepositeBalance"));
    deopositBalance.innerText = totalDepositeBalance;
    }
    if(localStorage.getItem("totalWithdraw") && localStorage.getItem("totalDepositeBalance")){
        const totalWithdraw = parseFloat(localStorage.getItem("totalWithdraw"));
        withDrawAmount.innerText = totalWithdraw;
        const totalDepositeBalance = parseFloat(localStorage.getItem("totalDepositeBalance"));
        deopositBalance.innerText = totalDepositeBalance;
    }
}
getData()

