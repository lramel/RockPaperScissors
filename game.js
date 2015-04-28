var userChoice = null;
var computerChoice = null;

var playerRock = document.getElementById("playerRock");
var playerPaper = document.getElementById("playerPaper");
var playerScissors = document.getElementById("playerScissors");

var computerRock = document.getElementById("computerRock");
var computerPaper = document.getElementById("computerPaper");
var computerScissors = document.getElementById("computerScissors");

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
            return "You win, great job!";
        } else {
            return "The computer wins, better luck next time!";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "You win, great job!";
        } else {
            return "The computer wins, better luck next time!";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "You win, great job!";
        } else {
            return "The computer wins, better luck next time!";
        }
    }
}

function declareWinner() {
    alert(compareChoices(userChoice, computerChoice));
}

function clickDisabler() {
    playerRock.removeEventListener("click",rockClicked,false);
    playerPaper.removeEventListener("click",paperClicked,false);
    playerScissors.removeEventListener("click",scissorsClicked,false);
}

function rockClicked() {
    playerPaper.src = 'images/placeholder.png';
    playerScissors.src = 'images/placeholder.png';
    userChoice = "rock";
    clickDisabler();
    setTimeout(computersPick, 1000);
    setTimeout(declareWinner, 2000);
}

function paperClicked() {
    playerRock.src = 'images/placeholder.png';
    playerScissors.src = 'images/placeholder.png';
    userChoice = "paper";
    clickDisabler();
    setTimeout(computersPick, 1000);
    setTimeout(declareWinner, 2000);
}
function scissorsClicked() {
    playerPaper.src = 'images/placeholder.png';
    playerRock.src = 'images/placeholder.png';
    userChoice = "scissors";
    clickDisabler();
    setTimeout(computersPick, 1000);
    setTimeout(declareWinner, 2000);
}

//Assign event listeners to the available players choices
playerRock.addEventListener("click",rockClicked,false);
playerPaper.addEventListener("click",paperClicked,false);
playerScissors.addEventListener("click",scissorsClicked,false);