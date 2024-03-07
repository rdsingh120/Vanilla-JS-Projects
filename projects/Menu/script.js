const menuItems = [
    {
        type: 'appetizer',
        img: 'images/a1.jpg',
        name: 'Sliders',
        price: "$ 11.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'appetizer',
        img: 'images/a2.jpg',
        name: 'Baked Potatoes',
        price: "$ 12.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'side',
        img: 'images/s1.jpg',
        name: 'Fries',
        price: "$ 7.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'side',
        img: 'images/s2.jpg',
        name: 'Onion Rings',
        price: "$ 8.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'main',
        img: 'images/mc1.jpg',
        name: 'Salmon',
        price: "$ 42.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'main',
        img: 'images/mc2.jpg',
        name: 'Steak',
        price: "$ 56.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'dessert',
        img: 'images/d1.jpg',
        name: 'Strawberry Cake',
        price: "$ 15.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'dessert',
        img: 'images/d2.jpg',
        name: 'Chocolate Cake',
        price: "$ 16.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'drink',
        img: 'images/dr1.jpg',
        name: 'Classic Mai Tai',
        price: "$ 10.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },
    {
        type: 'drink',
        img: 'images/dr2.jpg',
        name: 'Margarita',
        price: "$ 10.99",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsa, fugiat odio nulla voluptatibus iusto delectus."
    },

];

const createMenuItem = (type, img, name, price, details) => {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item', type);
    document.querySelector('.row').appendChild(menuItem);

    let menuItemImg = document.createElement('div');
    menuItemImg.className = 'menu-item-img';
    menuItem.appendChild(menuItemImg);

    let itemImg = document.createElement('img');
    itemImg.className = 'item-img';
    itemImg.src = img;
    menuItemImg.appendChild(itemImg);

    let menuItemDesc = document.createElement('div');
    menuItemDesc.className = 'menu-item-desc';
    menuItem.appendChild(menuItemDesc);

    let itemHeading = document.createElement('div');
    itemHeading.className = 'item-heading';
    menuItemDesc.appendChild(itemHeading);

    let itemName = document.createElement('span');
    itemName.className = "item-name";
    itemName.textContent = name;
    itemHeading.appendChild(itemName);

    let itemPrice = document.createElement('span');
    itemPrice.className = "item-price";
    itemPrice.textContent = price;
    itemHeading.appendChild(itemPrice);

    let hr = document.createElement('hr');
    menuItemDesc.appendChild(hr);

    let itemDetails = document.createElement('p');
    itemDetails.className = "item-details";
    itemDetails.textContent = details
    menuItemDesc.appendChild(itemDetails);
}

const addMenuItem = () => {
    for (let i = 0; i < menuItems.length; i++) {
        createMenuItem(menuItems[i].type, menuItems[i].img, menuItems[i].name, menuItems[i].price, menuItems[i].details);
    }
}

addMenuItem();

const filterMenuItems  = (item) => {
    let menuItem = document.querySelectorAll('.menu-item');

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItem[i].classList.contains(item)) {
            menuItem[i].style.display = 'flex';
        }
        else {
            menuItem[i].style.display = 'none';
        }
    }
}

document.querySelector('#all-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('menu-item')
});

document.querySelector('#appetizers-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('appetizer')
});

document.querySelector('#sides-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('side')
});

document.querySelector('#main-courses-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('main')
});

document.querySelector('#desserts-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('dessert')
});

document.querySelector('#drinks-btn').addEventListener('click', function (e) {
    e.preventDefault();
    filterMenuItems('drink')
});