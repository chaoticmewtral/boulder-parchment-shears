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

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

let playerSelection;
let computerSelection;
let result = [];

function playRound(playerSelection, computerSelection) {
    
    // assign variables
    playerSelection = prompt('boulder, parchment, shears');
    computerSelection = getComputerChoice();

    if (playerSelection === null) {
        return "Aww, don't you want to play?";
    } else {
        switch(playerSelection.toLowerCase()) {
            case 'boulder':
                switch(computerSelection) {
                    case 'boulder':
                        result[0] = "draw";
                        return result;
                        break;
                    
                    case 'parchment':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                        break;

                    case 'shears':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                }
                break;
            case 'parchment':
                switch(computerSelection) {
                    case 'boulder':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                        break;
                    
                    case 'parchment':
                        result[0] = "draw";
                        return result;
                        break;

                    case 'shears':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                }
                break;
            
            case 'shears':
                switch(computerSelection) {
                    case 'boulder':
                        result[0] = "lose";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                        break;
                    
                    case 'parchment':
                        result[0] = "win";
                        result[1] = playerSelection;
                        result[2] = computerSelection;
                        return result;
                        break;

                    case 'shears':
                        result[0] = "draw";
                        return result;
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

function msg() {
    if (result[0] === "win") {
        return `You win! ${result[1]} beats ${result[2]}.`; 
    } else if (result[0] === "lose") {
        return `You lose! ${result[2]} beats ${result[1]}.`;
    } else if (result[0] === "draw") {
        return "It's a draw!";
    } else {
        return "Invalid entry."
    }
    }


// const win = (`You win! ${playerSelection} beats ${computerSelection}`);
// const lose = (`You lose! ${computerSelection} beats ${playerSelection}`);
// const draw = ("It's a draw");

// console.log(playRound(playerSelection, computerSelection));

function game() {

    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        
        if (result[0] === "win") {
        wins++;
        }
        if (result[0] === "lose") {
            losses++;
        }
        console.log(`Round ${i + 1}: ${msg()}`);
    }
    if (wins >= 3) {
        return `You won ${wins} rounds! Victory is yours!`
    } else if (losses >= 3) {
        return `Oof, you lost ${losses} times. Better luck next time.`
    } else if  (wins > losses) {
        return `*Technically* you won more than you lost, but I'd hardly call it a sweeping victory.`
    } else if (wins = losses) {
        return "You won just as many times as you lost."
    }
    
    else {
        return "Better luck next time."
    }
}

console.log(game());