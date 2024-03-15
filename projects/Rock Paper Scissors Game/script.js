var playerChoice;
var playerScore = 0;

var computerChoice;
var computerScore = 0;

var result;

const startGame = () => {
    let playerColumn = document.createElement("div");
    playerColumn.classList.add("player", "col");
    document.querySelector('.row').appendChild(playerColumn);

    let playerScoreCard = document.createElement("h2");
    playerScoreCard.classList.add("score-card");
    playerScoreCard.textContent = "Your score: ";
    playerColumn.appendChild(playerScoreCard);

    let playerScoreSpan = document.createElement("span");
    playerScoreSpan.classList.add("player-score");
    playerScoreSpan.textContent = "0";
    playerScoreCard.appendChild(playerScoreSpan);

    let playerChoiceDiv = document.createElement("div");
    playerChoiceDiv.classList.add("player-choice");
    playerColumn.appendChild(playerChoiceDiv);

    let playerChoiceImg = document.createElement("img");
    playerChoiceImg.classList.add("player-choice-img");
    playerChoiceDiv.appendChild(playerChoiceImg);

    let computerColumn = document.createElement("div");
    computerColumn.classList.add("computer", "col");
    document.querySelector('.row').appendChild(computerColumn);

    let computerScoreCard = document.createElement("h2");
    computerScoreCard.classList.add("score-card");
    computerScoreCard.textContent = "Computer's score: ";
    computerColumn.appendChild(computerScoreCard);

    let computerScoreSpan = document.createElement("span");
    computerScoreSpan.classList.add("computer-score");
    computerScoreSpan.textContent = "0";
    computerScoreCard.appendChild(computerScoreSpan);

    let computerChoiceDiv = document.createElement("div");
    computerChoiceDiv.classList.add("computer-choice");
    computerColumn.appendChild(computerChoiceDiv);

    let computerChoiceImg = document.createElement("img");
    computerChoiceImg.classList.add("computer-choice-img");
    computerChoiceDiv.appendChild(computerChoiceImg);

    let rockChoice = document.createElement("div");
    rockChoice.classList.add("choices", "rock");
    document.querySelector('.options').appendChild(rockChoice);

    let rockImg = document.createElement("img");
    rockImg.src = "images/rock.png"
    rockChoice.appendChild(rockImg);

    let secondDiv = document.createElement("div");
    secondDiv.classList.add("second");
    document.querySelector('.options').appendChild(secondDiv);

    let paperChoice = document.createElement("div");
    paperChoice.classList.add("choices", "paper");
    secondDiv.appendChild(paperChoice);

    let paperImg = document.createElement("img");
    paperImg.src = "images/paper.png"
    paperChoice.appendChild(paperImg);

    let scissorsChoice = document.createElement("div");
    scissorsChoice.classList.add("choices", "scissors");
    secondDiv.appendChild(scissorsChoice);

    let scissorsImg = document.createElement("img");
    scissorsImg.src = "images/scissors.png"
    scissorsChoice.appendChild(scissorsImg);

    document.querySelector('.start-game').remove();

    clickFunc("rock");
    clickFunc("paper");
    clickFunc("scissors");
};

document.querySelector('.start-game').addEventListener('click', startGame);

const clickFunc = (className) => {
    document.querySelector(`.${className}`).addEventListener('click', () => {
        update(className)
    });
};





const update = (className) => {
    document.querySelector('.player-choice-img').src = `images/${className}.png`;
    playerChoice = className;
    computerChoice = computerChoiceGenerator();
    document.querySelector('.computer-choice-img').src = `images/${computerChoice}.png`;
    document.querySelector('.title').textContent = game();
    setTimeout(clearScreen, 2000);
}

const computerChoiceGenerator = () => {
    let computerChoiceArray = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    return computerChoiceArray[randomNumber];
}

const game = () => {
    if (computerChoice == "rock" && playerChoice == "rock") {
        result = "Its a tie!";
    }
    else if (computerChoice == "rock" && playerChoice == "paper") {
        result = "Player wins!";
        playerScore++;
    }
    else if (computerChoice == "rock" && playerChoice == "scissors") {
        result = "Computer wins!";
        computerScore++;
    }
    else if (computerChoice == "paper" && playerChoice == "rock") {
        result = "Computer wins!";
        computerScore++;
    }
    else if (computerChoice == "paper" && playerChoice == "paper") {
        result = "Its a tie!";
    }
    else if (computerChoice == "paper" && playerChoice == "scissors") {
        result = "Player wins!";
        playerScore++;
    }
    else if (computerChoice == "scissors" && playerChoice == "rock") {
        result = "Player wins!";
        playerScore++;
    }
    else if (computerChoice == "scissors" && playerChoice == "paper") {
        result = "Computer wins!";
        computerScore++;
    }
    else {
        result = "Its a tie!";
    }
    
    document.querySelector('.player-score').textContent = playerScore;
    document.querySelector('.computer-score').textContent = computerScore;
    return result;    
};

const clearScreen = () => {
    document.querySelector('.title').textContent = "Choose again...";
    document.querySelector('.player-choice-img').src = ``;
    document.querySelector('.computer-choice-img').src = ``;
};

