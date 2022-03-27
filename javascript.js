let playerSelection;
function playerSelect (){
    return playerSelection = prompt("Rock, Paper, or Scissors?","").toLowerCase();
}

let randomNumber;
function random() {
    return randomNumber = Math.floor(Math.random()*3) + 1;
}

let computerSelection = computerPlay();
function computerPlay() {
    random();
    if (randomNumber == 1 ) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    }
    return "scissors";
}

// console.log(playerSelection);
// console.log(computerSelection);

let roundWinner;
function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return roundWinner = "Computer Wins"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return roundWinner = "Computer Wins"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return roundWinner = "Computer Wins"
    } else if (playerSelection === computerSelection) {
        return roundWinner = "Tie"
    } else
     return roundWinner = "Player Wins"
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        playRound(playerSelect(),computerPlay());
        if (roundWinner == "Computer Wins") {
            computerWins += 1;
        } else if (roundWinner == "Player Wins") {
            playerWins += 1;
        } else if (roundWinner == "Tie") {
            tie += 1;
        }
        
    }
    return (`Player won: ${playerWins}, Computer won: ${computerWins}, Ties: ${tie}`)


}

// alert (playRound(playerSelection, computerSelection));

alert (game())

