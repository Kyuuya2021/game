let currentPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerMove(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (checkTie()) {
            alert('Tie game!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    const cells = document.querySelectorAll('.cell');
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function checkTie() {
    const cells = document.querySelectorAll('.cell');
    return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

document.addEventListener('DOMContentLoaded', () => {
    resetGame();
});
function playerMove(cell) {
    if (cell.textContent === '' && !checkWin(currentPlayer) && !checkTie()) {
        cell.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            showGameOver(currentPlayer + ' wins!');
        } else if (checkTie()) {
            showGameOver('Tie game!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function showGameOver(message) {
    const gameOverScreen = document.getElementById('gameOverScreen');
    const winnerMessage = document.getElementById('winnerMessage');
    winnerMessage.textContent = message;
    gameOverScreen.classList.remove('hidden');
}

function resetGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    document.getElementById('gameOverScreen').classList.add('hidden');
}
