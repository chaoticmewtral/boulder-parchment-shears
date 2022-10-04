// variables
const choice = ['Boulder', 'Parchment', 'Shears'];
const buttons = document.querySelectorAll('.bps');
const divResults = document.querySelector('#results');
const score = document.querySelector('#score');

let result = [];
let playerSelection;
let computerSelection;
let compScore = 0;
let playerScore = 0;
let round = 0;

// functions
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();

        switch(playerSelection) {
            case 'Boulder':
                switch(computerSelection) {
                    case 'Boulder':
                        result[0] = "draw";
                        result[1] = playerSelection;
                        // return result;
                        break;
                    
                    case 'Parchment':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        compScore++;
                        // return result;
                        break;
    
                    case 'Shears':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        playerScore++;
                        // return result;
                }
                break;
            case 'Parchment':
                switch(computerSelection) {
                    case 'Boulder':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        playerScore++;
                        // return result;
                        break;
                    
                    case 'Parchment':
                        result[0] = "draw";
                        result[1] = playerSelection;
                        // return result;
                        break;
    
                    case 'Shears':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        compScore++;
                        // return result;
                }
                break;
            
            case 'Shears':
                switch(computerSelection) {
                    case 'Boulder':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        compScore++;
                        // return result;
                        break;
                    
                    case 'Parchment':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        playerScore++;
                        // return result;
                        break;
    
                    case 'Shears':
                        result[0] = "draw";
                        result[1] = playerSelection;
                        // return result;
                }
        }
        round++;
        // add to DOM
        roundResults();
        playGame();
    });
});

function roundResults() {
    let str;
    const pResults = document.createElement('p');
    
    switch(result[0]) {
        case 'win':
            str = `Round ${round}: You win! ${playerSelection} beats ${computerSelection}!`
            break;

        case 'lose':
            str = `Round ${round}: You lose! ${computerSelection} beats ${playerSelection}.`
            break;

        case 'draw':
            str = `Round ${round}: It's a draw. You both chose ${playerSelection}.`
    }
    pResults.textContent = str;
    divResults.appendChild(pResults);
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playGame() {
    if (playerScore == 5) {
        console.log("You win the game!");
    } else if (compScore == 5) {
        console.log("You lost. Better luck next time.");
    }
}

// function playRound() {

//     switch(playerSelection) {
//         case 'Boulder':
//             switch(computerSelection) {
//                 case 'Boulder':
//                     result[0] = "draw";
// //                     return result;
//                     break;
                
//                 case 'Parchment':
//                     result[0] = "lose";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//                     break;

//                 case 'Shears':
//                     result[0] = "win";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//             }
//             break;
//         case 'Parchment':
//             switch(computerSelection) {
//                 case 'Boulder':
//                     result[0] = "win";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//                     break;
                
//                 case 'Parchment':
//                     result[0] = "draw";
// //                     return result;
//                     break;

//                 case 'Shears':
//                     result[0] = "lose";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//             }
//             break;
        
//         case 'Shears':
//             switch(computerSelection) {
//                 case 'Boulder':
//                     result[0] = "lose";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//                     break;
                
//                 case 'Parchment':
//                     result[0] = "win";
//                     result[1] = playerSelection;
//                     result[2] = computerSelection;
// //                     return result;
//                     break;

//                 case 'Shears':
//                     result[0] = "draw";
// //                     return result;
//             }
//     }
//     console.log(result);
// }



// Player clicks Boulder, Parchment, or Shears to begin gameplay
// Computer randomly selects one of the options
// Compare and return results
// Add to score
// When player or computer reaches 5 wins, the game is over
// Declare winner