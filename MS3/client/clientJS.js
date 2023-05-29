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

const applyCreditCard = document.getElementById('applyCreditCard');
const creditCardForm = document.getElementById('creditCardForm');

const billsNot = document.getElementById('billsNot');
const divider = document.getElementById('billsNot1');

const CCNot = document.getElementById('CCNot');
const CCDiv = document.getElementById('CCDiv');


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

if (applyCreditCard && mainView && home) {

    applyCreditCard.addEventListener('click', function () {
        console.log("hello9");
        creditCardForm.style.display = "block";
        applyCreditCard.style.display = "none";
    })
}

if (billsNot) {
    billsNot.addEventListener('click', function () {
        console.log("hello10");
        billsNot.style.display = "none";
        divider.style.display = "none";
        setActiveDiv("bills");
    })
}


if (CCNot) {
    CCNot.addEventListener('click', function () {
        console.log("hello11");
        CCNot.style.display = "none";
        CCDiv.style.display = "none";
        setActiveDiv("creditCard");
    })
}


function setActiveDiv(divId) {
    if (divId !== activeDiv) {
        console.log(divId);
        document.getElementById(activeDiv).style.display = "none";
        document.getElementById(divId).style.display = "block";
        activeDiv = divId; // Update the active div variable
    }
}




let popup1 = document.getElementById("popup1"); //loan popup

function openPopup1() {
    popup1.classList.add("open-popup");

    fullName.value = "";
    nationalID.value = "";
    Email.value = "";
    phone.value = "";
    birthDate.value = "";
    address1.value = "";
    city.value = "";
    region.value = "";
    postal.value = "";
    NameOnCard.value = "";
    cardNumber.value = "";
    csv.value = "";
    expiryDate.value = "";
    reason.value = "";
    country.value = "Country";
    loans.value = "Loan Type";
}
function closePopup1() {
    popup1.classList.remove("open-popup");
}

let popup2 = document.getElementById("popup2"); //transfer popup

function openPopup2() {
    popup2.classList.add("open-popup");
    accountNumber.value = "";
    bankName.value = "";
    recipientAccount.value = "";
    recipientName.value = "";
    amount.value = "";
}
function closePopup2() {
    popup2.classList.remove("open-popup");

}

let popup3 = document.getElementById("popup3"); //transfer popup

function openPopup3() {
    popup3.classList.add("open-popup");
}
function closePopup3() {
    popup3.classList.remove("open-popup");
}
let popup4 = document.getElementById("popup4");
function openPopup4() {
    popup4.classList.add("open-popup");
}
function closePopup4() {
    popup4.classList.remove("open-popup");
}

const reminder = document.getElementById("reminder");
const reminderDate = document.getElementById("reminderDate");
const reminderTime = document.getElementById("reminderTime");
function openPopupReminder() {
    reminder.classList.add("open-popup");
}
function closePopupReminder() {
    reminder.classList.remove("open-popup");
    reminderDate.value == '';
    reminderTime.value == '';

}

const send = document.getElementById('send');
const today = new Date().toISOString().split('T')[0];
document.getElementById("reminderDate").setAttribute('min', today);
let result = document.querySelector('h1');
send.addEventListener('click', () => {
    let value = reminderDate.value.trim();
    let timeValue = reminderTime.value.trim();
    if (value.length !== 0 && timeValue.length !== 0) {
        openPopup4();
        closePopupReminder();
    }
});
// send.addEventListener('click', function handleClick() {
//     const reminderDate= document.getElementById("reminderDate");
//     const reminderTime= document.getElementById("reminderTime");

//   if (!(reminderDate.value && reminderTime.value)) {
//             openPopup4();
//             closePopupReminder();
//   }
// });





const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const nationalID = document.getElementById('nationalID');
const Email = document.getElementById('Email');
const phone = document.getElementById('phone');
const birthDate = document.getElementById('birthDate');
const address1 = document.getElementById('address1');
//const address2 = document.getElementById('address2');
const city = document.getElementById('city');
const region = document.getElementById('region');
const postal = document.getElementById('postal');
const NameOnCard = document.getElementById('NameOnCard');
const cardNumber = document.getElementById('cardNumber');
const csv = document.getElementById('csv');
const expiryDate = document.getElementById('expiryDate');
const reason = document.getElementById('reason');
const country = document.getElementById('country');
const loans = document.getElementById('loans');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = Email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
}

const validateInputs = () => {
    const NameValue = fullName.value.trim();
    const nationalIDValue = nationalID.value.trim();
    const EmailValue = Email.value.trim();
    const phoneValue = phone.value.trim();
    const birthDateValue = birthDate.value.trim();
    const address1Value = address1.value.trim();
    //const address2Value = address2.value.trim();
    const cityValue = city.value.trim();
    const regionValue = region.value.trim();
    const postalValue = postal.value.trim();
    const NameOnCardValue = NameOnCard.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const csvValue = csv.value.trim();
    const expiryDateValue = expiryDate.value.trim();
    const reasonValue = reason.value.trim();
    const countryValue = country.value.trim();

    let isFormValid = true;
    if (loans.value === "Loan Type") {
        setError(loans, 'Choose loan type');
        isFormValid = false;
    }
    else {
        setSuccess(loans);
    }

    if (NameValue === '') {
        setError(fullName, 'Full name is required');
        isFormValid = false;
    } else {
        setSuccess(fullName);
    }

    if (nationalIDValue === '') {
        setError(nationalID, 'National ID is required');
        isFormValid = false;
    } else if (nationalIDValue.length < 16) {
        setError(nationalID, 'National ID must be 14 digits');
        isFormValid = false;
    } else {
        setSuccess(nationalID);
    }

    if (EmailValue === '') {
        setError(Email, 'Email address is required');
        isFormValid = false;
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address.');
        isFormValid = false;
    } else {
        setSuccess(Email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone number is required');
        isFormValid = false;
    } else if (phoneValue.length < 11) {
        setError(phone, "Phone numbers must be 11 digits");
        isFormValid = false;
    } else {
        setSuccess(phone);
    }

    if (birthDateValue === '') {
        setError(birthDate, 'Birth date is required');
        isFormValid = false;
    }
    else {
        setSuccess(birthDate);
    }

    if (address1Value === '') {
        setError(address1, 'Adress is required');
        isFormValid = false;
    } else {
        setSuccess(address1);
    }


    if (country.value === "Country") {
        setError(country, 'Choose your country');
        isFormValid = false;
    }
    else {
        setSuccess(country);
    }

    if (cityValue === '') {
        setError(city, 'City is required');
        isFormValid = false;
    } else {
        setSuccess(city);
    }

    if (regionValue === '') {
        setError(region, 'Region is required');
        isFormValid = false;
    } else {
        setSuccess(region);
    }

    if (postalValue === '') {
        setError(postal, 'Postal is required');
        isFormValid = false;
    } else if (postalValue.length < 5) {
        setError(postal, "Postal must be 5 digits");
        isFormValid = false;
    } else {
        setSuccess(postal);
    }

    if (NameOnCardValue === '') {
        setError(NameOnCard, 'Card holder name is required');
        isFormValid = false;
    } else {
        setSuccess(NameOnCard);
    }

    if (cardNumberValue === '') {
        setError(cardNumber, 'Card number is required');
        isFormValid = false;
    } else if (cardNumberValue.length < 16) {
        setError(cardNumber, 'Card number must be 16 digits');
        isFormValid = false;
    } else {
        setSuccess(cardNumber);
    }

    if (csvValue === '') {
        setError(csv, 'Card number is required');
        isFormValid = false;
    } else if (csvValue.length < 3) {
        setError(csv, 'Card number must be 3 digits');
        isFormValid = false;
    } else {
        setSuccess(csv);
    }

    if (expiryDateValue === '') {
        setError(expiryDate, 'Expiry date is required');
        isFormValid = false;
    }
    else {
        setSuccess(expiryDate);
    }

    if (reasonValue === '') {
        setError(reason, 'Reason is required');
        isFormValid = false;
    }
    else {
        setSuccess(reason);
    }

    // counrty.addEventListener('change', () => {
    //     const selectedOption = country.value;

    //     if (selectedOption === '') {
    //       // No option selected
    //       setError(country,'Please select an option');
    //     } else {

    //       setSuccess(country)
    //     }
    // });
    if (isFormValid) {
        openPopup1();
    }
};
// PAY NOW DISAPPEAR
// function deleteRecord(button) {
//     var row = button.parentNode.parentNode;
//     row.remove();
//     saveTableState();
//   }

//   function saveTableState() {
//     var table = document.getElementById("billl");
//     var tableHTML = table.innerHTML;
//     localStorage.setItem("billTableState", tableHTML);
//   }

//   function loadTableState() {
//     var table = document.getElementById("billl");
//     var tableHTML = localStorage.getItem("billTableState");
//     if (tableHTML) {
//       table.innerHTML = tableHTML;
//     }
//   }

//   loadTableState();


// PAY NOW REAPPEAR WHEN REFRESHED          
var index, table = document.getElementById('billl');
for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[5].onclick = function () {
        index = this.parentNode.rowIndex;
        table.deleteRow(index);

    };


}





const form2 = document.getElementById('form2');
const accountNumber = document.getElementById('accountNumber');
const bankName = document.getElementById('bankName');
const recipientAccount = document.getElementById('recipientAccount');
const recipientName = document.getElementById('recipientName');
const amount = document.getElementById('amount');
form2.addEventListener('submit', e => {
    e.preventDefault();

    validateInputsBankTransfer();
});


const validateInputsBankTransfer = () => {
    const accountNumberValue = accountNumber.value.trim();
    const bankNameValue = bankName.value.trim();
    const recipientAccountValue = recipientAccount.value.trim();
    const recipientNameValue = recipientName.value.trim();
    const amountValue = amount.value.trim();

    let isFormValid = true;
    // const radio= document.querySelectorAll('input[name="transfer"]');
    // function checkRadio() {
    //     let isFormValid = false;

    //     for (let i = 0; i < radio.length; i++) {
    //       if (radio[i].checked) {
    //         isFormValid = true;
    //         break;
    //       }
    //     }

    //     if (!isFormValid) {
    //       setError(radio[0], 'Please choose a transfer type');
    //     } else {
    //       setSuccess(radio[0]);
    //     }
    //   }
    //   checkRadio();

    if (accountNumberValue === '') {
        setError(accountNumber, 'Account number is required');
        isFormValid = false;
    } else if (accountNumberValue.length < 12) {
        setError(accountNumber, 'Account number must be 12 digits');
        isFormValid = false;
    }
    else {
        setSuccess(accountNumber);
    }

    if (bankNameValue === '') {
        setError(bankName, 'Bank name is required');
        isFormValid = false;
    } else {
        setSuccess(bankName);
    }

    if (recipientAccountValue === '') {
        setError(recipientAccount, 'Recipient account number is required');
        isFormValid = false;
    } else if (recipientAccountValue.length < 12) {
        setError(recipientAccount, 'Recipient account number must be 12 digits.');
        isFormValid = false;
    } else {
        setSuccess(recipientAccount);
    }

    if (recipientNameValue === '') {
        setError(recipientName, 'Recipient full name is required');
        isFormValid = false;
    } else {
        setSuccess(recipientName);
    }

    if (amountValue === '') {
        setError(amount, 'Amount is required');
        isFormValid = false;
    }
    else {
        setSuccess(amount);
    }


    if (isFormValid) {
        openPopup2();
    }
};
// PAY NOW DISAPPEAR
// function deleteRecord(button) {
//     var row = button.parentNode.parentNode;
//     row.remove();
//     saveTableState();
//   }

//   function saveTableState() {
//     var table = document.getElementById("billl");
//     var tableHTML = table.innerHTML;
//     localStorage.setItem("billTableState", tableHTML);
//   }

//   function loadTableState() {
//     var table = document.getElementById("billl");
//     var tableHTML = localStorage.getItem("billTableState");
//     if (tableHTML) {
//       table.innerHTML = tableHTML;
//     }
//   }

//   loadTableState();


// PAY NOW REAPPEAR WHEN REFRESHED          
var index, table = document.getElementById('billl');
for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[5].onclick = function () {
        index = this.parentNode.rowIndex;
        table.deleteRow(index);

    };


}

let reportDescription = document.getElementById("reportDescription");
let popupReport2 = document.getElementById("popupReport2")
let report = document.getElementById("report");
function openPopupReport() {
    console.log("hello");
    report.classList.add("open-popup");
}

function closePopupReport() {
    report.classList.remove("open-popup");
    reportDescription.value = "";
}

function sendReport() {
    if (reportDescription.value !== "") {
        console.log("hello");
        openPopupReport2();
        closePopupReport();
    }
}

function openPopupReport2() {
    popupReport2.classList.add("open-popup");
}
function closePopupReport2() {
    popupReport2.classList.remove("open-popup");
    popupReport2.classList.add("transition-effect");
}

