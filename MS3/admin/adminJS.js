const signUpButton = document.getElementById('signUp');
const signIn = document.getElementById('signin-button');
const signInButton = document.getElementById('signIn');
const signUp = document.getElementById('signup-button');
const container = document.getElementById('container');


signUpButton.addEventListener('click', function () {
    container.classList.add("right-panel-active");

});

signInButton.addEventListener('click', function () {
    console.log("hello");
    container.classList.remove("right-panel-active");
});

signIn.addEventListener('click', function () {
    window.location.href = "signedIn.html";
});

signUp.addEventListener('click', function () {
    alert("You have successfully signed up!");
    window.location.href = "admin.html";
});






