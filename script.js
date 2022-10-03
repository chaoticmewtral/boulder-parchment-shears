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

// Player clicks boulder, parchment, or shears to begin gameplay
// Computer randomly selects one of the options
// Compare and return results
// Add to score
// When player or computer reaches 5 wins, the game is over
// Declare winner