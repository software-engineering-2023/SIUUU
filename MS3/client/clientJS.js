const signUpButton = document.getElementById('signUp');
const signIn = document.getElementById('signin-button');
const signInButton = document.getElementById('signIn');
const signUp = document.getElementById('signup-button');
const container = document.getElementById('container');
if (signInButton) {
    signUpButton.addEventListener('click', function () {
        console.log("hello1");
        container.classList.add("right-panel-active");

    });
    signInButton.addEventListener('click', function () {
        console.log("hello1");
        container.classList.remove("right-panel-active");
    })
};

if (signIn) {
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

