
let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

function computerPlay() {
    let randAnswer = Math.random() * 3;
    if (randAnswer <= 1) {
        return rock;
    } else if (randAnswer <= 2) {
        return paper;
    } else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return "It's a tier! Both have chosen " + playerSelection;
    }

    if (playerSelection == rock) {
        if (computerSelection == paper) {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Won! Rock beats Scissors"
        }
    }

    if (playerSelection == paper) {
        if (computerSelection == scissors) {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Won! Papaer beats Rock"
        }
    }

    if (playerSelection == scissors) {
        if (computerSelection == rock) {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Won! Scissors beats Paper"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("What is your choise: Rock, Papaer or Scissors?", computerPlay());
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}
