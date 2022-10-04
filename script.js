// variables
const choice = ['Boulder', 'Parchment', 'Shears'];
const buttons = document.querySelectorAll('.bps');

let result = [];
let playerSelection;
let computerSelection;

// functions
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
    });
});

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playRound() {

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
    console.log(result);
}



// Player clicks Boulder, Parchment, or Shears to begin gameplay
// Computer randomly selects one of the options
// Compare and return results
// Add to score
// When player or computer reaches 5 wins, the game is over
// Declare winner