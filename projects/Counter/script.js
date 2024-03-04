var number = 0;
var decreaseButton = document.getElementById("decrease-btn");
var increaseButton = document.getElementById("increase-btn");
var resetButton = document.getElementById("reset-btn");
var counter = document.getElementById("counter");


function increaseCounter() {
    number++;
    counter.textContent = number;
    colorChange();
    
}

function decreaseCounter() {
    number--;
    counter.textContent = number;    
    colorChange();
}

function resetCounter() {
    number = 0;
    counter.textContent = number
    colorChange();
}

function colorChange() {
    if (number > 0) {
        counter.style.color = "rgb(8, 243, 8)";
    }
    else if (number == 0) {
        counter.style.color = "rgb(6, 160, 237)";
    }
    else {
        counter.style.color = "rgb(255, 140, 0)";
    }
}


increaseButton.addEventListener("click", increaseCounter);
decreaseButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);
