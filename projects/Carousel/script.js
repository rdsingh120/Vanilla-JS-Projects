const data = [
    [
        "Wade Wilson",
        "Deadpool",
        `"It's a big house. It's weird I only ever see two of you. 
        Almost like the studio couldn't afford another X-Man."`
    ],
    [
        "Logan",
        "Wolverine",
        `"We lost Scott. We lost the professor. If we don't fight now, everything they stood for will die with them."`
    ],
    [
        "Clarke Kent",
        "Superman",
        `“It Was Krypton That Made Me Superman, But It's The Earth That Makes Me Human.”`
    ],
    [
        "Jack Napier",
        "Joker",
        `“Smile, because it confuses people. Smile, because it's easier than explaining what is killing you inside.”`
    ],
    [
        "Bruce Wayne",
        "Batman",
        `“I Wear A Mask. And That Mask, It’s Not To Hide Who I Am, But To Create What I Am.”`
    ]
];

const cardName = document.getElementById("name");
const position = document.getElementById("position");
const review = document.getElementById("review");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const surprise = document.getElementById("surprise");
const image = document.getElementById("image");
var number = 0;



forward.addEventListener("click", function() {
    if (number >= 0 && number < data.length - 1) {
        number++ 
        info();
    }   
    else if (number == data.length - 1) {
        number = 0;
        info();    
    } 
});

backward.addEventListener("click", function() {
    if (number > 0 && number <= data.length - 1) {
        number--;
        info();
    }   
    else if (number == 0) {
        number = data.length - 1;
        info();
    }
    
});

surprise.addEventListener("click", function() {
    number = Math.floor(Math.random() * data.length)
    info();
});

function info() {
    image.src = `images/photo${number}.jpg`
    cardName.textContent = data[number][0];
    position.textContent = data[number][1];
    review.textContent = data[number][2];  
}

info();

