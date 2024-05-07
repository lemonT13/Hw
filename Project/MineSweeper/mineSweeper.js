const selectElement = document.querySelector(".form-select");
createGameBoard("boardNormal");
selectElement.addEventListener("change", (event) => {
    const selectedBoard = event.target.value;
    // Perform actions based on the selected option
    createGameBoard(`${selectedBoard}`);
});

function createGameBoard(boardType) {
    document.getElementById("board").innerHTML = "";
    const board = document.querySelector('#board');
    const boardChoose = document.createElement('div');
    boardChoose.id = boardType;
    board.appendChild(boardChoose);
    if (boardType == "boardHard") {
        var width = 50;
        var height = 50;
        var mines = 800;
    } else if (boardType == "boardMedium") {
        var width = 45;
        var height = 20;
        var mines = 400;
    } else {
        var width = 10;
        var height = 10;
        var mines = 20;
    }
    var f = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const boardChoose = document.getElementById(boardType);
            f.push([y, x]);
            var cell = document.createElement('div');
            cell.setAttribute("data-x", x);
            cell.setAttribute("data-y", y);
            boardChoose.appendChild(cell);
            cell.addEventListener("click", function() {
                console.log(this);
            });

            cell.addEventListener("click", function() {
                
            });
        }
    }
    for (let i = 0; i < mines; i++) {
        while (true) {
            var x = Math.floor(Math.random() * width);
            var y = Math.floor(Math.random() * height);
            var cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (!cell.classList.contains("mines")) {
                cell.classList.add("mines");
                break;
            }
        }
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            
            if (!cell.classList.contains("mines")) {
                // 如果单元格不包含地雷，则添加 'valid' 类
                cell.classList.add("valid");
            }
        }
    }
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.querySelector(`[class="valid"][data-x="${x}"][data-y="${y}"]`);
            let totalMines = 0;
            for (let yOffset = -1; yOffset <= 1; yOffset++) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        // Ignore the current cell itself
                        continue;
                    }
                    console.log(xOffset, yOffset);
                    // const adjacentX = x + xOffset;
                    // const adjacentY = y + yOffset;
            
                    // // Check if the adjacent cell exists and contains a mine
                    // if (adjacentX >= 0 && adjacentX < width && adjacentY >= 0 && adjacentY < height) {
                    //     const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    //     if (adjacentCell.contains("mines")) {
                    //         totalMines += 1;
                    //     }
                    // }
                }
            }
            
            // Add data property for the current cell containing the total number of surrounding mines
            // cell.setAttribute("data-total", totalMines);
        }
    }
}