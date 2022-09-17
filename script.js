function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];

    return rps[(Math.floor(Math.random() * 2))];
}
function playRound(computerSelection, playerSelection)

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