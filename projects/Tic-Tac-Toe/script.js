var smallBox = document.querySelectorAll('.sm-box');
var row = document.querySelectorAll('.row');

const userPlay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', () => {
            if (!arr[i].textContent) {
                arr[i].textContent = "✖";
                setTimeout(() => {
                    computerPlay(arr);
                }, 500);
            }
        });
    }
};

userPlay(smallBox);


const computerPlay = (arr) => {
    let emptyBox = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].textContent) {
            emptyBox.push(arr[i]);
        }
    }
    let random = Math.floor(Math.random() * emptyBox.length);
    emptyBox[random].textContent = "🔘";
};
