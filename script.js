const choices = ['rock', 'paper', 'scissors'];
const computerSelection = getComputerChoice(choices);

let playerSelection = prompt("rock, paper, or scissors");
let playerScore = 0;
let cpuScore = 0;
let draw = 0;
let roundResult = playRound(playerSelection, computerSelection);
let gameScore = "Player: " + playerScore + " - Computer: " + cpuScore;



function getComputerChoice(list) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * list.length);

    // get random item
    const item = list[randomIndex];
    return item;
}



function playRound(playerSelection, computerSelection) {
    if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        return cpuScore;
    } else if (
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper'
    ) {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore;
    } else if (playerSelection == computerSelection) {
        console.log("Draw");
        return draw;
    }
}

function score(roundResult) {
    if (roundResult === playerScore) {
        playerScore++;
        return gameScore;
    } else if (roundResult === cpuScore) {
        cpuScore++;
    }   return gameScore;
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (playerScore > cpuScore) {
            console.log("Player won!")
        } else if (cpuScore > playerScore) {
            console.log("CPU won!")
        }
    }
}


console.log("Computer choice: " + computerSelection);
console.log(score(roundResult));






