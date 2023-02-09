/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// array of the RPM
const rpmArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0

// player and computer choice variable
// let computerChoice = "";
// let playerChoice = "";

// ** getComputerChoice randomly selects between `Rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

function getComputerChoice() {
    let computerChoice = "";
    let randomChoice = Math.floor(Math.random() * rpmArray.length);
    computerChoice = rpmArray[randomChoice];
    console.log(`Computer: ${computerChoice}`)


    return computerChoice
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    let score
    // return the result of score based on if you won, drew, or lost
    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
        score = 0;
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1;
        playerScore++
        document.getElementById("player-score").innerHTML = playerScore
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1;
        playerScore++
        document.getElementById("player-score").innerHTML = playerScore
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1;
        playerScore++
        document.getElementById("player-score").innerHTML = playerScore
    }
    // Otherwise human loses (aka set score to -1)
    else {
        score = -1;
        playerScore--
        document.getElementById("player-score").innerHTML = playerScore
    }
    // return score
    console.log(score)
    return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    let playerIcon
    let computerIcon

    if (playerChoice == "Rock") {
        playerIcon = "✊"
    } else if (playerChoice == "Paper") {
        playerIcon = "🤚"
    } else if (playerChoice == "Scissors") {
        playerIcon = "✌"
    }

    if (computerChoice == "Rock") {
        computerIcon = "✊"
    } else if (computerChoice == "Paper") {
        computerIcon = "🤚"
    } else if (computerChoice == "Scissors") {
        computerIcon = "✌"
    }

    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    if (score == 1) {
        document.getElementById("result").innerHTML = "You Win!";
    } else if (score == -1) {
        document.getElementById("result").innerHTML = "You Lose!";
    } else if (score == 0) {
        document.getElementById("result").innerHTML = "Draw!";   
    }
    document.getElementById("hands").innerHTML = `${playerIcon} ${playerChoice} vs ${computerChoice} ${computerIcon}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerPick = getComputerChoice()
    const score = getResult(playerChoice, computerPick)
    showResult(score, playerChoice, computerPick)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    const playerSelect = document.querySelectorAll(".rpsButton");

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    playerSelect.forEach(
        (btn) =>
        (btn.onclick = () => {
            onClickRPS(btn.value);
            console.log(`Player: ${btn.value}`)
        })
    );

    // Add a click listener to the end game button that runs the endGame() function on click
    document.querySelector("#endGameButton").onclick = () => {
        endGame();
    };
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    document.getElementById("player-score").innerHTML = ""
    document.getElementById("result").innerHTML = "";
    document.getElementById("hands").innerHTML = "";
    playerScore = 0
}

playGame();
