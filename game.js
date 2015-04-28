var userChoice = null;
var computerChoice = null;
var streak = 0;

var playerRock = document.getElementById("playerRock");
var playerPaper = document.getElementById("playerPaper");
var playerScissors = document.getElementById("playerScissors");

var computerRock = document.getElementById("computerRock");
var computerPaper = document.getElementById("computerPaper");
var computerScissors = document.getElementById("computerScissors");

var newGameButton = document.getElementById("newGameButton");
var gameResult = document.getElementById("gameResult");
var streakCounter = document.getElementById("streakCounter");


clickEnabler();
newGameButton.addEventListener("click", resetGame, false);

//Random selection for the Computer
function computersPick() {
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
        computerRock.src = 'images/rock.png';
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
        computerPaper.src = 'images/paper.png';
    } else {
        computerChoice = "scissors";
        computerScissors.src = 'images/scissors.png';
    }
}

// Find out who wins!
function compareChoices(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            streak++;
            streakCounter.innerHTML = streak;
            return "You win, great job!";
        } else {
            streakCounter.innerHTML = 0;
            return "The computer wins, better luck next time!";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            streak++;
            streakCounter.innerHTML = streak;
            return "You win, great job!";
        } else {
            streakCounter.innerHTML = 0;
            return "The computer wins, better luck next time!";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            streak++;
            streakCounter.innerHTML = streak;
            return "You win, great job!";
        } else {
            streakCounter.innerHTML = 0;
            return "The computer wins, better luck next time!";
        }
    }
}

//Assign event listeners to the available players choices
function clickEnabler() {
    playerRock.addEventListener("click",rockClicked,false);
    playerPaper.addEventListener("click",paperClicked,false);
    playerScissors.addEventListener("click",scissorsClicked,false);
}

function rockClicked() {
    playerPaper.src = 'images/placeholder.png';
    playerScissors.src = 'images/placeholder.png';
    userChoice = "rock";
    clickDisabler();
    gameTimer();
}

function paperClicked() {
    playerRock.src = 'images/placeholder.png';
    playerScissors.src = 'images/placeholder.png';
    userChoice = "paper";
    clickDisabler();
    gameTimer();
}
function scissorsClicked() {
    playerPaper.src = 'images/placeholder.png';
    playerRock.src = 'images/placeholder.png';
    userChoice = "scissors";
    clickDisabler();
    gameTimer();
}

function clickDisabler() {
    playerRock.removeEventListener("click",rockClicked,false);
    playerPaper.removeEventListener("click",paperClicked,false);
    playerScissors.removeEventListener("click",scissorsClicked,false);
}

function gameTimer() {
    setTimeout(computersPick, 1000);
    setTimeout(declareWinner, 2000);
}

function declareWinner() {
    gameResult.innerHTML = (compareChoices(userChoice, computerChoice));
    newGameButton.style.display = "inline";
}

function resetGame() {
    gameResult.innerHTML = "";
    newGameButton.style.display = "none";
    clickEnabler();

    playerRock.src = 'images/rock.png';
    playerPaper.src = 'images/paper.png';
    playerScissors.src = 'images/scissors.png';

    computerRock.src = 'images/placeholder.png';
    computerPaper.src = 'images/placeholder.png';
    computerScissors.src = 'images/placeholder.png';
}



