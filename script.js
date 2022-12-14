const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let cpuScore = 0;
let draw = 0;

function getComputerChoice(list) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * list.length);

    // get random item
    const item = list[randomIndex];
    return item;
}

function getPlayerChoice() {
    const rps = ['rock', 'paper', 'scissors']
    if (choices.includes(rps)) {
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
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        return cpuScore++;
    } else {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    } 
    }

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});

const paper = document.querySelector('#paper');
rock.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});

// function game() {
//     for (let i = 0; i < 100; i++) {
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice(choices);
//         console.log("Computer selected " + computerSelection);
//         playRound(playerSelection, computerSelection);
//         let gameScore = "Player: " + playerScore + " - Computer: " + cpuScore;
//         console.log(gameScore);
//         if (playerScore === 5) {
//             console.log("Player wins game!")
//             break;
//         } else if (cpuScore === 5) {
//             console.log("CPU wins game!")
//             break;
//         } else {
//             console.log("Keep going until you reach 5 points!")
//         }
//     }
    
    
// }

// game();




         






