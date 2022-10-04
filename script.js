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
                        // return result;
                        break;
    
                    case 'Shears':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        // return result;
                }
                break;
            case 'Parchment':
                switch(computerSelection) {
                    case 'Boulder':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
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
                        // return result;
                }
                break;
            
            case 'Shears':
                switch(computerSelection) {
                    case 'Boulder':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        // return result;
                        break;
                    
                    case 'Parchment':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        // return result;
                        break;
    
                    case 'Shears':
                        result[0] = "draw";
                        result[1] = playerSelection;
                        // return result;
                }
        }
        console.log(msg());
    });
});

function msg() {
    switch(result[0]) {
        case 'win':
            return `You win! ${result[1]} beats ${result[2]}!`
            break;

        case 'lose':
            return `You lose! ${result[2]} beats ${result[1]}!`
            break;

        case 'draw':
            return `It's a draw! You both chose ${result[1]}!`
    }
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

function playGame() {
    if (playerScore == 5) {
        return ""
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