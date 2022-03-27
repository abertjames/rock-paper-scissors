console.log("Hello World!");

let playerSelection = prompt("Rock, Paper, or Scissors?","");

function random() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber
}


function computerPlay() {
    if (random() == 1 ) {
        return "Rock";
    } else if (random() == 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection,computerPlay) {
    if ( (playerSelection === "Rock" && computerPlay === "Paper") || 
    (playerSelection === "Paper" && computerPlay === "Scissors") || 
    (playerSelection === "Scissors" && computerPlay=== "Rock") ) {
        alert("Computer Wins");
    } else if (playerSelection === computerPlay) {
        alert ("Tie");
    }
    alert ("Player Wins")
}

alert (playRound(playerSelection, computerPlay));