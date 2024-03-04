const navbar = document.querySelector('.navbar');
const darkLogo = document.querySelector('.logo-dark');
const lightLogo = document.querySelector('.logo-light');
const navListItem = document.querySelectorAll('.nav-list-item');
const menu = document.querySelector('.drop-list');
const menuItem = document.querySelectorAll(".drop-list-item")
const menuIcon = document.querySelector('.menu-btn');


window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.backgroundColor = 'white';
        darkLogo.style.display = 'block';
        lightLogo.style.display = 'none';
        navbar.style.color = 'black';
        navbar.style.opacity = ".95"
        for (let i = 0; i < navListItem.length; i++) {
            navListItem[i].style.color = 'black';
        }
    } else {
        navbar.style.backgroundColor = 'transparent';
        lightLogo.style.display = 'block';
        darkLogo.style.display = 'none';
        navbar.style.color = 'white';
        for (let i = 0; i < navListItem.length; i++) {
            navListItem[i].style.color = 'white';
        }
    }
}

menuIcon.addEventListener('click', function(e) {
    e.preventDefault();
    if (menu.style.height == "280px") {
        menu.style.height = "0px"
    }
    else {
        menu.style.height = "280px"
    }
});

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function() {
        menu.style.height = "0px"
    });
}