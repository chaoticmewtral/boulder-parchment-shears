// variables
const choice = ['Boulder', 'Parchment', 'Shears'];
const buttons = document.querySelectorAll('button');
let result = [];
let playerSelection;
let computerSelection;

// functions
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playRound() {
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound(button.id));
});