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
const divider= document.getElementById('billsNot1');
const notifications = document.getElementById('notifications');

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

if(billsNot){
    billsNot.addEventListener('click', function(){
        console.log("hello10");
        billsNot.style.display = "none";
        divider.style.display = "none";
        setActiveDiv("bills");
    })
}

function setActiveDiv(divId) {
    if (divId !== activeDiv) {
        document.getElementById(activeDiv).style.display = "none";
        document.getElementById(divId).style.display = "block";
        activeDiv = divId; // Update the active div variable
    }
}
let popup1=document.getElementById("popup1"); //loan popup

        function openPopup1(){
            popup1.classList.add("open-popup");
        }
        function closePopup1(){
            popup1.classList.remove("open-popup");
        }

let popup2=document.getElementById("popup2"); //transfer popup

        function openPopup2(){
            popup2.classList.add("open-popup");
        }
        function closePopup2(){
            popup2.classList.remove("open-popup");
        }

 let popup3=document.getElementById("popup3"); //transfer popup

         function openPopup3(){
            popup3.classList.add("open-popup");
        }
        function closePopup3(){
            popup3.classList.remove("open-popup");
        }

const form= document.getElementById('form');
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
const country= document.getElementById('country');

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
            //const countryValue= country.value.trim();

            let isFormValid = true;
        
            if(NameValue === '') {
                setError(fullName, 'Full name is required');
                 isFormValid = false;
            } else {
                setSuccess(fullName);
            }
        
            if(nationalIDValue === '') {
                setError(nationalID, 'National ID is required');
                isFormValid = false;
            } else if (nationalIDValue.length < 16 ) {
                setError(nationalID, 'National ID must be 14 digits');
                isFormValid = false;
            } else {
                setSuccess(nationalID);
            }
        
            if(EmailValue === '') {
                setError(Email, 'Email address is required');
                isFormValid = false;
            } else if (!isValidEmail(EmailValue)) {
                setError(Email, 'Provide a valid email address.');
                isFormValid = false;
            } else {
                setSuccess(Email);
            }
        
            if(phoneValue === '') {
                setError(phone, 'Phone number is required');
                isFormValid = false;
            } else if (phoneValue.length < 11) {
                setError(phone, "Phone numbers must be 11 digits");
                isFormValid = false;
            } else {
                setSuccess(phone);
            }

            if(birthDateValue === '') {
                setError(birthDate, 'Birth date is required');
                isFormValid = false;
            }
            else {
                setSuccess(birthDate);
            }

            if(address1Value === '') {
                setError(address1, 'Adress is required');
                isFormValid = false;
            } else {
                setSuccess(address1);
            }

            if(cityValue === '') {
                setError(city, 'City is required');
                isFormValid = false;
            } else {
                setSuccess(city);
            }

            if(regionValue === '') {
                setError(region, 'Region is required');
                isFormValid = false;
            } else {
                setSuccess(region);
            }

            if(postalValue === '') {
                setError(postal, 'Postal is required');
                isFormValid = false;
            } else if (postalValue.length < 5) {
                setError(postal, "Postal must be 5 digits");
                isFormValid = false;
            } else {
                setSuccess(postal);
            }

            if(NameOnCardValue === '') {
                setError(NameOnCard, 'Card holder name is required');
                isFormValid = false;
            } else {
                setSuccess(NameOnCard);
            }

            if(cardNumberValue === '') {
                setError(cardNumber, 'Card number is required');
                isFormValid = false;
            } else if (cardNumberValue.length < 16 ) {
                setError(cardNumber, 'Card number must be 16 digits');
                isFormValid = false;
            } else {
                setSuccess(cardNumber);
            }

            if(csvValue === '') {
                setError(csv, 'Card number is required');
                isFormValid = false;
            } else if (csvValue.length < 3 ) {
                setError(csv, 'Card number must be 3 digits');
                isFormValid = false;
            } else {
                setSuccess(csv);
            }

            if(expiryDateValue === '') {
                setError(expiryDate, 'Expiry date is required');
                isFormValid = false;
            }
            else {
                setSuccess(expiryDate);
            }

            if(reasonValue === '') {
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
            if(isFormValid)
            {
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
        var index, table= document.getElementById('billl');
            for(var i =1; i< table.rows.length; i++)
                {
                  table.rows[i].cells[5].onclick = function ()
             {
                 index = this.parentNode.rowIndex;
                 table.deleteRow(index);

                 };


                }



              

        