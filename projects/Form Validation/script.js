var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var btn = document.querySelector(".btn");
var error = document.querySelectorAll(".error");

var usernameValidation = false;
var emailValidation = false;
var passwordValidation = false;
var confirmPasswordValidation = false;

const red = (id) => {
    document.querySelector(`#${id}`).style.border = "2px solid red"; 
    document.querySelector(`.${id}-error`).style.visibility = "visible";
};

const green = (id) => {
    document.querySelector(`#${id}`).style.border = "2px solid #2ecc71"; 
    document.querySelector(`.${id}-error`).style.visibility = "hidden";
};

username.addEventListener("input", (e) => {
    e.preventDefault();
    if (username.value.length < 4 || username.value == "") { 
        red("username");
        usernameValidation = false;
    }
    else {
        green("username");
        usernameValidation = true;
    }
});

email.addEventListener("input", (e) => {
    e.preventDefault();
    if (email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) { 
        green("email");
        emailValidation = true;
    }
    else {
        red("email");
        emailValidation = false;
    }
});

password.addEventListener("input", (e) => {
    e.preventDefault();
    if (password.value.length < 8 || password.value == "") {
        red("password");
        passwordValidation = false;

    }
    else {
        green("password");
        passwordValidation = true;

    }
});

confirmPassword.addEventListener("input", (e) => {
    e.preventDefault();
    if (confirmPassword.value != password.value || confirmPassword.value == "" || confirmPassword.value.length < 8) {
        red("confirm-password");
        confirmPasswordValidation = false;


    }
    else {
        green("confirm-password");
        confirmPasswordValidation = true;
    }  
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (usernameValidation && emailValidation && passwordValidation && confirmPasswordValidation) {
        window.open("registration.html")
    }

    for (var i = 0; i < document.forms["registration-form"].length - 1; i++) {
        let input = document.forms["registration-form"][i];
        if (input.value === "") {
            input.style.border = "2px solid red";
            error[i].style.visibility = "visible";
        }
    }
    
});