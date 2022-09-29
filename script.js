// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment


let choice = ['boulder', 'parchment', 'shears'];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

let playerSelection;
let computerSelection;
let result = [];

// player selection
const bps = document.querySelectorAll('button');

bps.forEach((button) => {
    button.addEventListener('click', () => {
        return button.id;
    });
});

function playRound(playerSelection, computerSelection) {
    
    // assign variables
    playerSelection = bps();
    computerSelection = getComputerChoice();

    switch(playerSelection) {
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
            
    }
}

function msg() {
    switch(result[0]) {
        case "win":
            return `You win! ${result[1]} beats ${result[2]}.`;
            break;
        
        case "lose":
            return `You lose! ${result[2]} beats ${result[1]}.`;
            break;

        case "draw":
            return "It's a draw!";
    }
}

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