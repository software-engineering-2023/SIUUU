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

let activeDiv = "home";


if (signInButton && signUpButton && container) {
    signUpButton.addEventListener('click', function () {
        container.classList.add("right-panel-active");

    });
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