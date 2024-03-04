var copyButton;
var randomColor;
var bgContainer = document.getElementById("bg-container");
var hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomColorGenerator() {
    let hex = "#";
    for (var i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * hexArr.length);
        hex += hexArr[randomNum];
    }
    return hex;    
}

function copyButtonText() {
    copyButton.textContent = "📋"
}

function copyButtonGenerator() {
    copyButton = document.createElement("Button");
    bgContainer.insertBefore(copyButton, bgContainer.children[0]);
    copyButton.id = "copy-button";
    copyButtonText();
}

function copyColorCode() {
    navigator.clipboard.writeText(randomColor);
    copyButton.textContent = "✅";
    setInterval(function() {
    copyButtonText();
    }, 2000)
}

function randomBackgroundColor() {   
    randomColor = randomColorGenerator();
    document.getElementById("span").textContent = randomColor;
    document.body.style.backgroundColor = randomColor;

    if (copyButton) {
       copyButtonText();
    }
    while (!copyButton) {
        copyButtonGenerator();
    }
    copyButton.addEventListener("click", copyColorCode);
}

document.getElementById("btn").addEventListener("click", randomBackgroundColor);


