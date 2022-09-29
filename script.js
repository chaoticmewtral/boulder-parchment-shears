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
    playerSelection = button.id;
    computerSelection = getComputerChoice();

    switch(playerSelection) {
        case 'Boulder':
            switch(computerSelection) {
                case 'Boulder':
                    result[0] = "draw";
                    return result;
                    break;
                    
                case 'Parchment':
                    result[0] = "lose";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
                    break;

                case 'Shears':
                    result[0] = "win";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
            }
            break;
        case 'Parchment':
            switch(computerSelection) {
                case 'Boulder':
                    result[0] = "win";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
                    break;
                    
                case 'Parchment':
                    result[0] = "draw";
                    return result;
                    break;

                case 'Shears':
                    result[0] = "lose";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
            }
            break;
            
        case 'Shears':
            switch(computerSelection) {
                case 'Boulder':
                    result[0] = "lose";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
                    break;
                    
                case 'Parchment':
                    result[0] = "win";
                    result[1] = playerSelection;
                    result[2] = computerSelection;
                    return result;
                    break;

                case 'Shears':
                    result[0] = "draw";
                    return result;
            }
            
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound()
)});