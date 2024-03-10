var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var btn = document.querySelector(".btn");
var error = document.querySelectorAll(".error");

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
    if (username.value.length < 4) { 
        red("username");
    }
    else {
        green("username");
    }
});

email.addEventListener("input", (e) => {
    e.preventDefault();
    if (email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) { 
        green("email");
    }
    else {
        red("email");
    }
});

password.addEventListener("input", (e) => {
    e.preventDefault();
    if (password.value.length < 8) {
        red("password");

    }
    else {
        green("password");
    }
});

confirmPassword.addEventListener("input", (e) => {
    e.preventDefault();
    if (confirmPassword.value != password.value || confirmPassword.value == "") {
        red("confirm-password");

    }
    else {
        green("confirm-password");
    }  
});

btn.addEventListener("click", (e) => {
    var flag;
    e.preventDefault();
    for (var i = 0; i < document.forms["registration-form"].length - 1; i++) {
        let input = document.forms["registration-form"][i];
        if (input.value === "") {
            input.style.border = "2px solid red";
            error[i].style.visibility = "visible";
            flag = false;
        }
        else {
            input.style.border = "2px solid #2ecc71";
            error[i].style.visibility = "hidden";
            flag = true;
        }
    }
    if (flag) {
        window.open("registration.html")
    }
});



