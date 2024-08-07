var projects = [
    {
        name: "Text-To-Speech",
        image: "images/txt-to-speech.png",
        link: "projects/Text-To-Speech/index.html"
    },
    {
        name: "Dog Gallery",
        image: "images/dog.png",
        link: "projects/Dog Gallery/index.html"
    },
    {
        name: "Tic-Tac-Toe",
        image: "images/tictactoe.png",
        link: "projects/Tic-Tac-Toe/index.html"
    },
    {
        name: "Calculator",
        image: "images/calculator.png",
        link: "projects/Calculator/index.html"
    },
    {
        name: "Rock Paper Scissors",
        image: "images/rps.png",
        link: "projects/Rock Paper Scissors Game/index.html"
    },
    {
        name: "Word Guessing Game",
        image: "images/word-game.png",
        link: "projects/Word Guessing Game/index.html"
    },
    
    {
        name: "Form Validation",
        image: "images/form.png",
        link: "projects/Form Validation/index.html"
    },
    {
        name: "Slideshow",
        image: "images/slideshow.png",
        link: "projects/Slideshow/index.html"
    },
    {
        name: "To-do List",
        image: "images/todo.png",
        link: "projects/To-do List/index.html"
    },
    {
        name: "Story Generator",
        image: "images/story.png",
        link: "projects/Story Generator/index.html"
    },
    {
        name: "Lorem Ipsum Generator",
        image: "images/lorem.png",
        link: "projects/Lorem Ipsum Generator/index.html"
    },
    {
        name: "Giveaway Countdown",
        image: "images/countdown.png",
        link: "projects/Giveaway Countdown/index.html"
    },
    {
        name: "Tabs",
        image: "images/tab.png",
        link: "projects/Tabs/index.html"
    },
    {
        name: "Scroll Navbar",
        image: "images/scrollnav.png",
        link: "projects/Navbar (Scroll)/index.html"
    },
    {
        name: "Video Player",
        image: "images/video-player.png",
        link: "projects/Video Player/index.html"
    },
    {
        name: "Menu",
        image: "images/menu.png",
        link: "projects/Menu/index.html"
    },
    {
        name: "Accordion",
        image: "images/accordion.png",
        link: "projects/Accordion/index.html"
    },
    {
        name: "Modal",
        image: "images/modal.png",
        link: "projects/Modal/index.html"
    },
    {
        name: "Carousel",
        image: "images/carousel.png",
        link: "projects/Carousel/index.html"
    },
    {
        name: "Responsive Navbar",
        image: "images/resnav.png",
        link: "projects/Navbar/index.html"
    },
    {
        name: "Sidebar",
        image: "images/sidebar.png",
        link: "projects/Sidebar/index.html"
    },
    {
        name: "Counter",
        image: "images/counter.png",
        link: "projects/Counter/index.html"
    },
    {
        name: "Random Background",
        image: "images/randombg.png",
        link: "projects/Random Background Generator/index.html"
    },
];
const createProject = (name, image, link) => {
    let card = document.createElement('div');
    card.classList.add('col', 'card');
    document.querySelector('.row').appendChild(card);

    let projectLink = document.createElement('a');
    projectLink.target = '_blank';
    projectLink.href = link;
    card.appendChild(projectLink);

    let cardImage = document.createElement('img');
    cardImage.classList.add('card-img');
    cardImage.src = image;
    projectLink.appendChild(cardImage);

    let cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = name;
    projectLink.appendChild(cardTitle);

};

const addProject = (array) => {
    array.forEach(project => {
        createProject(project.name, project.image, project.link);
    })
}

const updateNumber = (num) => {
    document.querySelector('.numOfProj').textContent = num;
}

addProject(projects);
updateNumber(projects.length)