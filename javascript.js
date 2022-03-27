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

function playRound(x,y) {
    if (x === "Rock" && y === "Paper") {
        return "Computer Wins"
    } else if (x === "Paper" && y === "Scissors") {
        return "Computer Wins"
    } else if (x === "Scissors" && y === "Rock") {
        return "Computer Wins"
    } else if (x === y) {
        return "Tie"
    } else
     return "Player Wins"
}

alert (playRound(playerSelection, computerPlay()));

