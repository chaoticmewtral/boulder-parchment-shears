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

const playerSelection = prompt('rock, paper, scissors');
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    // code
                    break;
                
                case 'paper':
                    // code
                    break;

                case 'scissors':
                    // code
            }
            break;
        case 'paper':
            switch(computerSelection) {
                case 'rock':
                    // code
                    break;
                
                case 'paper':
                    // code
                    break;

                case 'scissors':
                    // code
            }
            break;
        
        case 'scissors':
            switch(computerSelection) {
                case 'rock':
                    // code
                    break;
                
                case 'paper':
                    // code
                    break;

                case 'scissors':
                    // code
            }
            break;
    }

}

