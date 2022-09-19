// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment
// computer randomly chooses from ['rock', 'paper', 'scissors']
// user selects from ['rock', 'paper', 'scissors']
// if computer selects rock:
//     if user selects rock
//         tie
//         play again
//     if user selects paper
//         user wins
//     if user selects scissors
//         user loses
// if computer selects paper:
//     if user selects rock
//         user loses
//     if user selects paper
//         tie
//         play again
//     if user selects scissors
//         user wins
// if computer selects scissors:
//     if user selects rock
//         user wins
//     if user selects paper
//         user loses
//     if user selects scissors
//         tie
//         play again

let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice());

let playerSelection = prompt('rock, paper, scissors');
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === null) {
        return "Aww, don't you want to play?";
    } else {
        switch(playerSelection.toLowerCase()) {
            case 'rock':
                switch(computerSelection) {
                    case 'rock':
                        return "It's a draw!";
                        break;
                    
                    case 'paper':
                        return "You lose! Paper beats Rock!";
                        break;

                    case 'scissors':
                        return "You win! Rock beats Scissors!"
                }
                break;
            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        return "You win! Paper beats Rock!"
                        break;
                    
                    case 'paper':
                        return "It's a draw!";
                        break;

                    case 'scissors':
                        return "You lose! Scissors beat Paper!"
                }
                break;
            
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        return "You lose! Rock beats Scissors!"
                        break;
                    
                    case 'paper':
                        return "You win! Scissors beat Paper!"
                        break;

                    case 'scissors':
                        return "It's a draw!";
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