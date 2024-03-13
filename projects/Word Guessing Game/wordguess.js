"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are

function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters

  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
}

startButton.addEventListener("click", startGame); // Starting game by clicking the start button

//My code
// <------------------------ START ------------------------->

inputBox.addEventListener("input" , function(){
  var letters = document.querySelectorAll(".wordBox-letter");
 setTimeout(function(){
    for (let i = 0; i < currentWord.length; i++) {   
      if (inputBox.value.toUpperCase() == currentWord[i]) {
        letters[i].textContent = currentWord[i];
      }
    }
    inputBox.value = "";
    
    let wordFound = "";
    for (let i = 0; i < letters.length; i++) {
      if (letters[i].textContent != "*") {
        wordFound += letters[i].textContent;
      }
    }
    if (wordFound == currentWord) {
      inputBox.disabled = true;
      msgBox.textContent = `You guessed the word ${currentWord} correctly!`
    }
  }, 300)
});

// <------------------------ End ------------------------->



