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
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const display = document.querySelector('#display');
        display.textContent = "Draw";
        return draw;
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
        const display = document.querySelector('#display');
        display.textContent = ("You lose! " + computerSelection + " beats " + playerSelection);
        return cpuScore++;
    } else {
        const display = document.querySelector('#display');
        display.textContent = ("You win! " + playerSelection + " beats " + computerSelection);
        return playerScore++;
    } 
    }

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    let playerSelection = 'rock';
    computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    let playerSelection = 'paper';
    computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    let playerSelection = 'scissors';
    computerSelection = getComputerChoice(choices);
    playRound(playerSelection,computerSelection);
});



console.log(playerScore);
console.log(cpuScore);


// function game() {
//     for (let i = 0; i < 100; i++) {
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice(choices);
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





         






