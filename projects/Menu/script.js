const everythingBtn = document.getElementById('all-btn');
const appetizersBtn = document.getElementById('appetizers-btn');
const sidesBtn = document.getElementById('sides-btn');
const mainCoursesBtn = document.getElementById('main-courses-btn');
const dessertsBtn = document.getElementById('desserts-btn');
const drinksBtn = document.getElementById('drinks-btn');
const menuItem = document.getElementsByClassName('menu-item');

everythingBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('menu-item');
});

appetizersBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('appetizer');
});

sidesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('side');
});

mainCoursesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('main-course');
});

dessertsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('dessert');
});

drinksBtn.addEventListener('click', function(e) {
    e.preventDefault();
    filter('drink');
});

function filter(className) {
    for (let i = 0; i < menuItem.length; i++) {
        if (menuItem[i].classList.contains(className)) {
            menuItem[i].style.display = 'flex';
        }
        else {
            menuItem[i].style.display = 'none';
        }
    }
}
