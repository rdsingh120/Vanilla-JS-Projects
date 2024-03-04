const dropdown = document.getElementById("dropdown");
document.getElementById("menu-icon").addEventListener("click", function() {

    if (dropdown.style.height == "230px") {
        dropdown.style.height = "0px";
        console.log(dropdown.style.height)
    }
    else {
        dropdown.style.height = "230px";
        console.log(dropdown.style.height)
    }
});

