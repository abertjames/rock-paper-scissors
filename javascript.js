console.log("Hello World!");

let playerSelection = prompt("Rock, Paper, or Scissors?","");

function random() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber
}

let computerSelection;
function computerPlay() {
    if (random() == 1 ) {
        computerSelection = "Rock";
    } else if (random() == 2) {
        computerSelection = "Paper";
    }
    computerSelection = "Scissors";
}

function playRound(playerSelection,computerSelection) {
    if ( (playerSelection === "Rock" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection=== "Rock") ) {
        alert("Computer Wins");
    } else if (playerSelection === computerSelection) {
        alert ("Tie");
    }
    alert ("Player Wins")
}

alert (playRound(playerSelection, computerSelection));