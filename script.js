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

function getPlayerChoice() { 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            return button.id;
        });
    });
}

function playRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();


}