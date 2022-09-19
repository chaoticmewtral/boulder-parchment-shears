// https://www.theodinproject.com/lessons/foundations-boulder-parchment-shears#assignment
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
// console.log(getComputerChoice());

let playerSelection = prompt('boulder, parchment, shears');
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === null) {
        return "Aww, don't you want to play?";
    } else {
        switch(playerSelection.toLowerCase()) {
            case 'boulder':
                switch(computerSelection) {
                    case 'boulder':
                        return "It's a draw!";
                        break;
                    
                    case 'parchment':
                        return "You lose! parchment beats boulder!";
                        break;

                    case 'shears':
                        return "You win! boulder beats shears!"
                }
                break;
            case 'parchment':
                switch(computerSelection) {
                    case 'boulder':
                        return "You win! parchment beats boulder!"
                        break;
                    
                    case 'parchment':
                        return "It's a draw!";
                        break;

                    case 'shears':
                        return "You lose! shears beat parchment!"
                }
                break;
            
            case 'shears':
                switch(computerSelection) {
                    case 'boulder':
                        return "You lose! boulder beats shears!"
                        break;
                    
                    case 'parchment':
                        return "You win! shears beat parchment!"
                        break;

                    case 'shears':
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

function game() {

}