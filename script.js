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
        const score = document.querySelector('#score');
        score.textContent = "Player: " + playerScore + " - Computer: " + cpuScore;
        return draw;
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
        cpuScore++;
        const display = document.querySelector('#display');
        display.textContent = ("You lose! " + computerSelection + " beats " + playerSelection);
        const score = document.querySelector('#score');
        score.textContent = "Player: " + playerScore + " - Computer: " + cpuScore;
        if (cpuScore === 5) {
            const gameOver = document.querySelector('#gameOver');
            gameOver.textContent = ("CPU wins game! First to reach 5 points!");
        } else {
            return cpuScore;
        }
    } else {
        playerScore++;
        const display = document.querySelector('#display');
        display.textContent = ("You win! " + playerSelection + " beats " + computerSelection);
        const score = document.querySelector('#score');
        score.textContent = "Player: " + playerScore + " - Computer: " + cpuScore;
        if (playerScore === 5) {
            const gameOver = document.querySelector('#gameOver');
            gameOver.textContent = ("Player wins game! First to reach 5 points!");
        } else {
            return playerScore;
        }
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




         






