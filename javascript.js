let input = prompt("Rock, Paper, or Scissors?","");
let playerSelection = input.toLowerCase();

function random() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber
}


function computerPlay() {
    if (random() == 1 ) {
        return "rock";
    } else if (random() == 2) {
        return "paper";
    }
    return "scissors";
}

let computerSelection = computerPlay();

console.log(computerSelection);
console.log(playerSelection);

function playRound(x,y) {
    if (x === "rock" && y === "paper") {
        return "Computer Wins"
    } else if (x === "paper" && y === "scissors") {
        return "Computer Wins"
    } else if (x === "scissors" && y === "rock") {
        return "Computer Wins"
    } else if (x === y) {
        return "Tie"
    } else
     return "Player Wins"
}

alert (playRound(playerSelection, computerSelection));

