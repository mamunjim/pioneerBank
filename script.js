document.addEventListener("DOMContentLoaded",function(){
// login button eventhandler
var loginBtn=document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
    var loginArea=document.getElementById("login-area");
    loginArea.style.display="none";
    var transactionArea=document.getElementById('transaction-area');
    transactionArea.style.display="block";
})

// deposit button event handler
// add value into deposit 
document.getElementById("deposit-btn").addEventListener("click",function(){
   var oldDeposit=parseFloat(document.getElementById("old-deposit").innerText);
   var newDeposit=parseFloat(document.getElementById("new-deposit").value);
   document.getElementById("new-deposit").value="";
   var totalDeposit=newDeposit+oldDeposit;
   document.getElementById("old-deposit").innerText=totalDeposit;
   
// add deposite effect on total balance
var oldBalance=parseFloat(document.getElementById("old-balance").innerText);
var totalBalance=newDeposit+oldBalance;
document.getElementById("old-balance").innerText=totalBalance;

});


// withdraw buton even handler
document.getElementById("withdraw-btn").addEventListener("click",function(){
    var oldWithdraw=parseFloat(document.getElementById("old-withdraw").innerText);
    var newWithdraw=parseFloat(document.getElementById("new-withdraw").value);
    document.getElementById("new-withdraw").value="";
    var totalWithdraw=oldWithdraw+newWithdraw;
    document.getElementById("old-withdraw").innerText=totalWithdraw;

// withdraw value effect on total balance
    var oldTotalBalance=document.getElementById("old-balance").innerText;
    var newTotalBalance=oldTotalBalance-newWithdraw;
    document.getElementById("old-balance").innerText=newTotalBalance;
});

})