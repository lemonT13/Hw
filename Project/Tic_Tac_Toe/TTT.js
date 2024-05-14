let currentPlayer = 'cow';
let board = ['', '', '', '', '', '', '', '', ''];

function play(cell, index) {
    if (!cell.classList.contains('cow') && !cell.classList.contains('horse')) {
        cell.classList.add(currentPlayer);
        board[index] = currentPlayer;
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'cow' ? 'horse' : 'cow';
    const horse = document.querySelector('.pHorse');
    const cow = document.querySelector('.pCow');
    if (currentPlayer === 'horse') {
        horse.classList.add('pTurn');
        cow.classList.remove('pTurn');
    } else {
        horse.classList.remove('pTurn');
        cow.classList.add('pTurn');
    }
    checkWin();
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横排
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 竖排
        [0, 4, 8], [2, 4, 6] // 对角线
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            win()
            return;
        }
    }

    if (board.every(cell => cell !== '')) {
        draw();
    }
}

function win() {
    const win = document.getElementById('win');
    win.style.display = "block";
    const winner = document.querySelector('.winner');
    if (currentPlayer === 'horse') {
        winner.innerHTML = '牛';
    } else {
        winner.innerHTML = '马';
    }
}

function draw() {
    const draw = document.getElementById('draw');
    draw.style.display = "block";
}

function restart() {
    const win = document.getElementById('win');
    win.style.display = "none";
    const draw = document.getElementById('draw');
    draw.style.display = "none";
    const cells = document.querySelectorAll('.c');
    cells.forEach(function (cell) {
        cell.classList.remove('cow', 'horse');
    });
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'cow';
    const horse = document.querySelector('.pHorse');
    const cow = document.querySelector('.pCow');
    horse.classList.remove('pTurn');
    cow.classList.add('pTurn');
}