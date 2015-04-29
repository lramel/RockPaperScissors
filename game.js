var userChoice = null;
var computerChoice = null;
var streak = 0;

var RESULT_WIN = "You win, great job!";
var RESULT_DRAW = "It's a tie, try again!";
var RESULT_LOSE = "The computer wins, better luck next time!";

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

var rules = {
    RockRock:RESULT_DRAW,
    RockPaper:RESULT_LOSE,
    RockScissors:RESULT_WIN,
    PaperRock:RESULT_WIN,
    PaperPaper:RESULT_DRAW,
    PaperScissors:RESULT_LOSE,
    ScissorsRock:RESULT_LOSE,
    ScissorsPaper:RESULT_WIN,
    ScissorsScissors:RESULT_DRAW
};

//Random selection for the Computer
function computersPick() {
    computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "Rock";
        computerRock.src = 'images/rock.png';
    } else if(computerChoice <= 0.67) {
        computerChoice = "Paper";
        computerPaper.src = 'images/paper.png';
    } else {
        computerChoice = "Scissors";
        computerScissors.src = 'images/scissors.png';
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
    userChoice = "Rock";
    clickDisabler();
    gameTimer();
}

function paperClicked() {
    playerRock.src = 'images/placeholder.png';
    playerScissors.src = 'images/placeholder.png';
    userChoice = "Paper";
    clickDisabler();
    gameTimer();
}
function scissorsClicked() {
    playerPaper.src = 'images/placeholder.png';
    playerRock.src = 'images/placeholder.png';
    userChoice = "Scissors";
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

// Find out who wins!
function compareChoices(choice1, choice2) {

    var choices = choice1 + choice2;

    if(rules[choices] === "You win, great job!") {
        streakIncrement();
    } else if (rules[choices] === "The computer wins, better luck next time!") {
        streakReset();
    }

    return rules[choices]
}

function declareWinner() {
    gameResult.innerHTML = (compareChoices(userChoice, computerChoice));
    newGameButton.style.display = "inline";
}

function streakIncrement() {
    streak++;
    streakCounter.innerHTML = streak;
}

function streakReset() {
    streak = 0;
    streakCounter.innerHTML = streak;
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



