let playerSelection = prompt("Rock, Paper, or Scissors?","").toLowerCase();

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

console.log(playerSelection);
console.log(computerSelection);

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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;

    for (let i = 0; i <= 5; i++) {
        playRound(playerSelection,computerSelection);
        if (playRound == "Computer Wins") {
            computerWins += 1;
        } else if (playRound == "Player Wins") {
            playerWins += 1;
        } else if (playRound == "Tie") {
            tie += 1;
        }
        
    }
    return (`Player won: ${playerWins}, Computer won: ${computerWins}, Ties: ${tie}`)


}

// alert (playRound(playerSelection, computerSelection));

alert (game())

