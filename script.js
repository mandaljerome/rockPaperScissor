
const rpmArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0


function getComputerChoice() {
    let computerChoice = "";
    let randomChoice = Math.floor(Math.random() * rpmArray.length);
    computerChoice = rpmArray[randomChoice];
    console.log(`Computer: ${computerChoice}`)


    return computerChoice
}

function getResult(playerChoice, computerChoice) {
    let score

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

    else {
        score = -1;
        playerScore--
        document.getElementById("player-score").innerHTML = playerScore
    }

    console.log(score)
    return score;
}


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


    if (score == 1) {
        document.getElementById("result").innerHTML = "You Win!";
    } else if (score == -1) {
        document.getElementById("result").innerHTML = "You Lose!";
    } else if (score == 0) {
        document.getElementById("result").innerHTML = "Draw!";   
    }
    document.getElementById("hands").innerHTML = `${playerIcon} ${playerChoice} vs ${computerChoice} ${computerIcon}`;
}


function onClickRPS(playerChoice) {
    const computerPick = getComputerChoice()
    const score = getResult(playerChoice, computerPick)
    showResult(score, playerChoice, computerPick)
}


function playGame() {
   
    const playerSelect = document.querySelectorAll(".rpsButton");

    playerSelect.forEach(
        (btn) =>
        (btn.onclick = () => {
            onClickRPS(btn.value);
            console.log(`Player: ${btn.value}`)
        })
    );

    document.querySelector("#endGameButton").onclick = () => {
        endGame();
    };
}

function endGame() {
    document.getElementById("player-score").innerHTML = ""
    document.getElementById("result").innerHTML = "";
    document.getElementById("hands").innerHTML = "";
    playerScore = 0
}

playGame();
