var images = [
    "images/pic0.jpg",
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
];
var slideshow = document.querySelector('.slideshow');


function createImage() {
    for (var i = 0; i < images.length; i++) {
        let img = document.createElement('img');
        img.className = "img"
        img.src = images[i]
        slideshow.appendChild(img);
    }
}

createImage();

var counter = 1200;
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    for (var i = 0; i < images.length; i++) {
        document.querySelectorAll(".img")[i].style.right = `${counter}px`
    }
    counter += 1200;
    if (counter == images.length * 1200) {
        counter = 0;
    }
});

