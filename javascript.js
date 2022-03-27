console.log("Hello World!");

function random() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return randomNumber
}

function computerPlay() {
    if (random() == 1 ) {
        return "Rock"
    } else if (random() == 2) {
        return "Paper"
    }
    return "Scissors"
}

console.log(computerPlay())

let playerSelection = prompt("Rock, Paper, or Scissors?","");

function playRound(playerSelection,computerPlay) {
    if (playerSelection === "Rock" && computerPlay === "Paper") {
        alert("Computer Wins");
    }
}