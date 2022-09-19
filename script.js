// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// computer randomly chooses from ['boulder', 'parchment', 'shears']
// user selects from ['boulder', 'parchment', 'shears']
// if computer selects boulder:
//     if user selects boulder
//         tie
//         play again
//     if user selects parchment
//         user wins
//     if user selects shears
//         user loses
// if computer selects parchment:
//     if user selects boulder
//         user loses
//     if user selects parchment
//         tie
//         play again
//     if user selects shears
//         user wins
// if computer selects shears:
//     if user selects boulder
//         user wins
//     if user selects parchment
//         user loses
//     if user selects shears
//         tie
//         play again

let choice = ['boulder', 'parchment', 'shears'];
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    
    function getComputerChoice() {
        choice[Math.floor(Math.random() * 3)];
    }

    playerSelection = prompt('boulder, parchment, shears');
    computerSelection = getComputerChoice();

    const win = (`You win! ${playerSelection} beats ${computerSelection}`);
    const lose = (`You lose! ${computerSelection} beats ${playerSelection}`);
    const draw = ("It's a draw");

    if (playerSelection === null) {
        return "Aww, don't you want to play?";
    } else {
        switch(playerSelection.toLowerCase()) {
            case 'boulder':
                switch(computerSelection) {
                    case 'boulder':
                        return draw;
                        break;
                    
                    case 'parchment':
                        return lose;
                        break;

                    case 'shears':
                        return win;
                }
                break;
            case 'parchment':
                switch(computerSelection) {
                    case 'boulder':
                        return win;
                        break;
                    
                    case 'parchment':
                        return draw;
                        break;

                    case 'shears':
                        return lose;
                }
                break;
            
            case 'shears':
                switch(computerSelection) {
                    case 'boulder':
                        return lose;
                        break;
                    
                    case 'parchment':
                        return win;
                        break;

                    case 'shears':
                        return draw;
                }
                break;
                
            case '':
                return "You have to choose one."
                break;
            
            default:
                return "That's...not one of the options."
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

// function game() {
//     const score = [];

//     for (let i = 0; i < 5;) {
//         playRound(playerSelection, computerSelection);
//         console.log(`Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`);
//         i++;
//     }
// }

// console.log(game());