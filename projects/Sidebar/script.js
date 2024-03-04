const menuIcon = document.getElementById("icon");
const sideMenu = document.getElementById("sidebar");
const closeButton = document.getElementById("close-btn");
const listItems  = document.getElementsByClassName("list-item");

menuIcon.addEventListener("click", function(){
    sideMenu.style.left = "0px";
});

closeButton.addEventListener("click", function(e){
    e.preventDefault();
    sideMenu.style.left = "-400px";
});

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        listItems[i].style.background = "#f1f5f9";
        listItems[i].children[0].style.background = "#f1f5f9";
    });

    listItems[i].addEventListener("mouseout", function() {
        listItems[i].style.background = "white";
        listItems[i].children[0].style.background = "white";
    });
    listItems[i].addEventListener("click", function(e){
        e.preventDefault();
    });
}