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

console.log(computerPlay());

function playRound(playerSelection,computerPlay) {
    if (playerSelection === "Rock" && computerPlay === "Paper") {
        alert("Computer Wins");
    } else if (playerSelection === "Paper" && computerPlay === "Scissors") {
        alert("Computer Wins");
    } else if (playerSelection === "Scissors" && computerPlay === "Rock") {
        alert("Computer Wins");
    } else if (playerSelection === computerPlay) {
        alert ("Tie");
    } else
    alert ("Player Wins")
}

alert (playRound(playerSelection, computerPlay));

