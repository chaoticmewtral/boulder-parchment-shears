const choice = ['Boulder', 'Parchment', 'Shears'];
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

const playerSelection = buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return button.id;
    });
});