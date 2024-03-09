var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var btn = document.querySelector(".btn");

var error = document.querySelectorAll(".error");//
username.addEventListener("input", (e) => {
    e.preventDefault();
    if (username.value.length < 4) { 
        username.style.border = "2px solid red"; 
        error[0].style.visibility = "visible";
    }
    else {
        username.style.border = "2px solid #2ecc71";
        error[0].style.visibility = "hidden";
    }
});

email.addEventListener("input", (e) => {
    e.preventDefault();
    if (email.value.match("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")) { 
        email.style.border = "2px solid #2ecc71";
        error[1].style.visibility = "hidden";
    }
    else {
        email.style.border = "2px solid red"; 
        error[1].style.visibility = "visible";
    }
});

btn.addEventListener("click", (e) => {
    // e.preventDefault();
    // for (var i = 0; i < document.forms["registration-form"].length - 1; i++) {
    //     if (document.forms["registration-form"][i].value === "") {
    //         document.forms["registration-form"][i].style.border = "2px solid red";
    //         error[i].style.visibility = "visible";
    //     }
    //     else {
    //         document.forms["registration-form"][i].style.border = "2px solid #2ecc71";
    //         error[i].style.visibility = "hidden";
    //     }
    // }
});



