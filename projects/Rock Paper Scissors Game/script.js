var playerChoiceImg = document.querySelector('.player-choice-img');
var computerChoiceImg = document.querySelector('.computer-choice-img');

var playerChoice;
var playerScore = 0;

var computerChoice;
var computerScore = 0;

var result;

const clickFunc = (className) => {
    document.querySelector(`.${className}`).addEventListener('click', () => {
        update(className)
    });
};

clickFunc("rock");
clickFunc("paper");
clickFunc("scissors");



const update = (className) => {
    playerChoiceImg.src = `images/${className}.png`;
    playerChoice = className;
    computerChoice = computerChoiceGenerator();
    computerChoiceImg.src = `images/${computerChoice}.png`;
    document.querySelector('.round').textContent = game();
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
    document.querySelector('.round').textContent = "Choose => rock || paper || scissors";
    playerChoiceImg.src = ``;
    computerChoiceImg.src = ``;
};
