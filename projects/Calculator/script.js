var displayText = document.querySelector('.display-text');
var btn = document.querySelectorAll('.btn');
var zero = document.querySelector('.zero');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var ac = document.querySelector('.ac');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');
var equal = document.querySelector('.equal');

const clear = () => {
    if (displayText.textContent == 0) {
        displayText.textContent = "";
    }
};

displayText.textContent = 0;
ac.addEventListener('click', function(e) {
    displayText.textContent = "0";
});

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        e.preventDefault();
    });
}

zero.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 0;
});

one.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 1;
});

two.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 2;
});

three.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 3;
});

four.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 4;
});

five.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 5;
});

six.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 6;
});

seven.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 7;
});

eight.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 8;
});

nine.addEventListener('click', function(e) {
    e.preventDefault();
    clear();
    displayText.textContent += 9;
});

plus.addEventListener('click', function(e) {
    e.preventDefault();
    if (displayText.textContent) {
        displayText.textContent += "+";
    }
});

minus.addEventListener('click', function(e) {
    e.preventDefault();
    if (displayText.textContent) {
        displayText.textContent += "-";
    }
});

multiply.addEventListener('click', function(e) {
    e.preventDefault();
    if (displayText.textContent) {
        displayText.textContent += "×";
    }
});

divide.addEventListener('click', function(e) {
    e.preventDefault();
    if (displayText.textContent) {
        displayText.textContent += "÷";
    }
});

equal.addEventListener('click', function(e) {
    
});