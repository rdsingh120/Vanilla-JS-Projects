const video = document.querySelector('.video');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const slider = document.querySelector('.slider');

window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

video.play();

playBtn.addEventListener("click", function(e) {
    e.preventDefault();
    slider.style.left = '0px';
    video.play();
});

pauseBtn.addEventListener("click", function(e) {
    e.preventDefault();
    slider.style.left = '131px';
    video.pause();
});