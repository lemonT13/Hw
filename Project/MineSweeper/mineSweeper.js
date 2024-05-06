const board = document.getElementById("board");
let width = 10;
const boardNormal;
const boardMedium;
const boardHard;
const chooseBoard = document.createElement("div")
board.appendChild()
board.removeChild()
function createGameBoard() {
    // 清除所有cell
    document.getElementById("board").innerHTML = "";
    // 创建游戏板
    for (let i = 0; i < width * width; i++) {
        const cell = document.createElement("div");
        cell.classList.add(`${i}`);
        .appendChild(cell);
    }

}