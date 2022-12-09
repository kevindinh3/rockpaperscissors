const choices = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice(choices);

let playerScore = 0;
let cpuScore = 0;
let draw = 0;
let gameScore = "Player: " + playerScore + " - Computer: " + cpuScore;



function getComputerChoice(list) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * list.length);

    // get random item
    const item = list[randomIndex];
    return item;
}

function getPlayerChoice() {
    const rps = prompt("rock, paper, or scissors?");
    if (choices.includes(rps)) {
        console.log(`You've selected ${rps}`)
        return rps;
    } else {
        console.log("Choose between rock, paper or scissors");
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Draw");
        return draw;
    } else if (
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock'
    ) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        return cpuScore++;
    } else {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    }
    }


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        if (playerScore > cpuScore) {
            console.log("Player wins!")
        } else if (cpuScore > playerScore) {
            console.log("CPU Wins!")
        } 
    } 
}

game();

console.log(gameScore);
console.log(cpuScore);
console.log(playerScore);



         






