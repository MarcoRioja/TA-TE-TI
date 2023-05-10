const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let winner = null;

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(e) {
    const cell = e.target;
    if (cell.textContent !== '' || winner !== null) {
        return;
    }
    cell.textContent = currentPlayer;
    checkWin();
    togglePlayer();
}

function checkWin() {

    winCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (
            cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent
        ) {
            winner = currentPlayer;
            combination.forEach(c => {
                cells[c].classList.add('win')
            })

            const message = `¡${winner} ha ganado!`;
            setTimeout(() => {
                alert(message);
            }, 100);
        }
    });
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function resetGame() {
    location.reload();
}

document.getElementById('reset-button').addEventListener('click', resetGame);
