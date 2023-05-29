const signUpButton = document.getElementById('signUp');
const signIn = document.getElementById('signin-button');
const signInButton = document.getElementById('signIn');
const signUp = document.getElementById('signup-button');
const container = document.getElementById('logInContainer');
const mainView = document.getElementById('mainView');

const homeButton = document.getElementById('homeButton');
const home = document.getElementById('home');

const creditCardButton = document.getElementById('creditCardButton');
const creditCard = document.getElementById('creditCard');

const loan = document.getElementById('loan');
const loanButton = document.getElementById('loanButton');

const transactionButton = document.getElementById('transactionButton');
const transaction = document.getElementById('transaction');

const billsButton = document.getElementById('billsButton');
const bills = document.getElementById('bills');

const transferButton = document.getElementById('transferButton');
const transfer = document.getElementById('transfer');

const cashBackButton = document.getElementById('cashBackButton');
const cashBack = document.getElementById('cashBack');

const search = document.getElementById('btn btn-custom');




let activeDiv = "home";


if (signInButton) {

    signInButton.addEventListener('click', function () {
        container.classList.remove("right-panel-active");
    })
};

if (signIn && signUp) {
    signIn.addEventListener('click', function () {
        window.location.href = "clientDashboard.html";
    })
};
if (signUp) {
    signUp.addEventListener('click', function () {
        alert("You have successfully signed up!");
        console.log("hello1");
        window.location.href = "clientLogIn.html";
    })
};

if (homeButton && mainView && home) {
    homeButton.addEventListener('click', function () {
        console.log("hello2");
        setActiveDiv("home");
    })
}

if (creditCardButton && mainView && home) {
    creditCardButton.addEventListener('click', function () {
        console.log("hello3");
        setActiveDiv("creditCard");
    })
}

if (loanButton && mainView && home) {
    loanButton.addEventListener('click', function () {
        console.log("hello4");
        setActiveDiv("loan");
    })
}

if (transactionButton && mainView && home) {
    transactionButton.addEventListener('click', function () {
        console.log("hello5");
        setActiveDiv("transaction");
    })
}

if (billsButton && mainView && home) {
    billsButton.addEventListener('click', function () {
        console.log("hello6");
        setActiveDiv("bills");
    })
}

if (transferButton && mainView && home) {
    transferButton.addEventListener('click', function () {
        console.log("hello7");
        setActiveDiv("transfer");
    })
}

if (cashBackButton && mainView && home) {
    cashBackButton.addEventListener('click', function () {
        console.log("hello8");
        setActiveDiv("cashBack");
    })
}


function setActiveDiv(divId) {
    if (divId !== activeDiv) {
        document.getElementById(activeDiv).style.display = "none";
        document.getElementById(divId).style.display = "block";
        activeDiv = divId; // Update the active div variable
    }
}


// search.addEventListener('click',function(){


//         var text = document.getElementById("textField");
//         text.style.display = "block";



// });
const here= document.getElementById('here');
function displayText() {
    if(here.value!==''){
    const text= document.getElementById('textField');
    text.style.display = "block";
    }
}
let popup1 = document.getElementById("popup1"); //notification popup
let popup2 = document.getElementById("popup2"); //announcement popup
function openPopup1() {
    popup1.classList.add("open-popup");
}
function closePopup1() {
    popup1.classList.remove("open-popup");
}
function openPopup2() {
    popup2.classList.add("open-popup");
}
function closePopup2() {
    popup2.classList.remove("open-popup");
}

let popup3=document.getElementById("popup3");
let fullName=document.getElementById("fullName");
let nationalID=document.getElementById("nationalID");
let Email=document.getElementById("Email");
let phone=document.getElementById("phone");
let birthDate= document.getElementById("birthDate");
let address1= document.getElementById("address1");
let address2= document.getElementById("address2");
let city= document.getElementById("city");
let region= document.getElementById("region");
let postal= document.getElementById("postal");
function openPopup3() {
    popup3.classList.add("open-popup");

}
function closePopup3() {
    popup3.classList.remove("open-popup");
    fullName.value="";
    nationalID.value="";
    Email.value="";
    phone.value="";
    birthDate.value="";
    address1.value="";
    address2.value="";
    city.value="";
    region.value="";
    postal.value="";
}
let popup4= document.getElementById("popup4");
let customerid= document.getElementById("customerID");
let accountNumber= document.getElementById("accountNumber");
function openPopup4() {
    popup4.classList.add("open-popup");

}
function closePopup4() {
    popup4.classList.remove("open-popup");
    customerid.value="";
    accountNumber.value="";
    
}
let reportID = document.getElementById("reportID");
let customerID = document.getElementById("customerID");
let description = document.getElementById("description");
let notificationForm = document.getElementById("notificationForm");
function openPopupNotify() {
    notificationForm.classList.add("open-popup");
}
function closePopupNotify() {
    notificationForm.classList.remove("open-popup");
    reportID.value = "";
    customerID.value = "";
    description.value = "";


}
function func() {
    var inputval = document.getElementById('here').value;

    document.getElementById('unique').innerHTML = 'Account ID:' + '' + inputval;
}
function opencredit() {
    window.location = 'creditcard.html';
}
function openloan() {
    window.location = 'Loan.html';
}
function signout() {
    window.location = 'clientLogIn.html'
}
function func1() {
    var inputval = document.getElementById('nice').value;

    document.getElementById('nice1').innerHTML = inputval;
}
function openacc() {
    window.location = 'bank accounts.html';
}
function closeacc() {
    window.location = 'bank close.html';
}

var acceptButtons = document.querySelectorAll('.my-div1 button, .my-div2 button, .my-div3 button');

// Add event listeners to the buttons
acceptButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the parent element (div) of the button
    var parentDiv = button.parentNode;
    // Remove the parent div element
    parentDiv.parentNode.removeChild(parentDiv);
  });
});

function sendNotification() {
    if (customerID.value !== "" && reportID.value !== "" && description.value !== "") {
            openPopup1();
            closePopupNotify();
        }
    }





