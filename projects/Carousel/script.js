const data = [
    {
        image: "images/photo0.jpg",
        name: "Wade Wilson",
        alias: "Deadpool",
        quote: `"It's a big house. It's weird I only ever see two of you. Almost like the studio couldn't afford another X-Man."`
    },
    {
        image: "images/photo1.jpg",
        name: "Logan",
        alias: "Wolverine",
        quote: `"We lost Scott. We lost the professor. If we don't fight now, everything they stood for will die with them."`

    },
    {
        image: "images/photo2.jpg",
        name: "Clarke Kent",
        alias: "Superman",
        quote: `“It Was Krypton That Made Me Superman, But It's The Earth That Makes Me Human.”`
    },
    {
        image: "images/photo4.jpg",
        name: "Bruce Wayne",
        alias: "Batman",
        quote: `“I Wear A Mask. And That Mask, It’s Not To Hide Who I Am, But To Create What I Am.”`


    },
    {
        image: "images/photo3.jpg",
        name: "Jack Napier",
        alias: "Joker",
        quote: `“Smile, because it confuses people. Smile, because it's easier than explaining what is killing you inside.”`
    },
];

const cardName = document.getElementById("name");
const position = document.getElementById("position");
const quote = document.getElementById("quote");
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
    image.src = data[number].image;
    cardName.textContent = data[number].name;
    position.textContent = data[number].alias;
    quote.textContent = data[number].quote;  
}

info();

