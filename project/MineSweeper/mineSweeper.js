var gameStart = false;
var time = 0;
const selectElement = document.querySelector(".form-select");
createGameBoard("boardNormal");
selectElement.addEventListener("change", (event) => {
    const selectedBoard = event.target.value;
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
        var height = 20;
        var mines = 200;
    } else if (boardType == "boardMedium") {
        var width = 25;
        var height = 16;
        var mines = 90;
    } else {
        var width = 10;
        var height = 10;
        var mines = 15;
    }
    const flagLeft = document.querySelector(".flagLeft");
    flagLeft.innerHTML = `${mines}`;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const boardChoose = document.getElementById(boardType);
            var cell = document.createElement('div');
            cell.setAttribute("data-x", x);
            cell.setAttribute("data-y", y);
            cell.classList.add("cell");
            boardChoose.appendChild(cell);
            cell.addEventListener("click", function () {
                clickedCell(this);
            });

            cell.addEventListener("contextmenu", function (event) {
                event.preventDefault();
                flagCell(this);
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
                cell.classList.add("valid");
            }
        }
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (cell.classList.contains('mines')) {
                continue;
            }
            let totalMines = 0;
            if (x == 0 && y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (x == 0 && y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (x == width - 1 && y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (x == width - 1 && y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (x == 0) {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (x == width - 1) {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else if (y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
            else {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        if (adjacentCell.classList.contains("mines")) {
                            totalMines += 1;
                        }
                    }
                }
                cell.setAttribute("data-total", totalMines);
            }
        }
    }

    function clickedCell(cell) {
        const switchFlag = document.getElementById("flagSwitch");
        if (!gameStart){
            gameStart = true;
            setInterval(setTime, 10);
        }
        if (switchFlag.checked) {
            flagCell(cell);
        } else {
            if (cell.classList.contains("flag")) {
                return;
            }
            else if (cell.classList.contains("mines")) {
                gameOver(cell);
            }
            else if (!cell.classList.contains("flag")){
                let total = cell.getAttribute("data-total");
                if (total != 0) {
                    cell.classList.add("checked");
                    if (total == 1) {
                        cell.classList.add("one");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 2) {
                        cell.classList.add("two");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 3) {
                        cell.classList.add("three");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 4) {
                        cell.classList.add("four");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 5) {
                        cell.classList.add("five");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 6) {
                        cell.classList.add("six");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 7) {
                        cell.classList.add("seven");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    else if (total == 8) {
                        cell.classList.add("eight");
                        cell.classList.remove("valid");
                        detectCell(cell);
                    }
                    cell.innerHTML = total;
                    checkWin();
                    return;
                    
                }
                cell.classList.add("checked");
                cell.classList.remove("valid");
                checkCell(cell);
                checkWin();
                
            }
        }
    }
    
    function setTime() {
        if(gameStart){
            time = time + 0.01
            const timer = document.querySelector(".timer");
            timer.innerHTML = "hello"
            timer.innerHTML = `${time.toFixed(2)}s`;
        }else{
            return
        }
    }

    function detectCell(cell) {
        const x = parseInt(cell.getAttribute("data-x"), 10);
        const y = parseInt(cell.getAttribute("data-y"), 10);
        if (x == 0 && y == 0) {
            for (let yOffset = 0; yOffset <= 1; yOffset++) {
                for (let xOffset = 0; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        adjacentCell.classList.remove("valid");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (x == 0 && y == height - 1) {
            for (let yOffset = -1; yOffset <= 0; yOffset++) {
                for (let xOffset = 0; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (x == width - 1 && y == 0) {
            for (let yOffset = 0; yOffset <= 1; yOffset++) {
                for (let xOffset = -1; xOffset <= 0; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (x == width - 1 && y == height - 1) {
            for (let yOffset = -1; yOffset <= 0; yOffset++) {
                for (let xOffset = -1; xOffset <= 0; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (x == 0) {
            for (let yOffset = -1; yOffset <= 1; yOffset++) {
                for (let xOffset = 0; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (y == 0) {
            for (let yOffset = 0; yOffset <= 1; yOffset++) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (x == width - 1) {
            for (let yOffset = -1; yOffset <= 1; yOffset++) {
                for (let xOffset = -1; xOffset <= 0; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else if (y == height - 1) {
            for (let yOffset = -1; yOffset <= 0; yOffset++) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
        else {
            for (let yOffset = -1; yOffset <= 1; yOffset++) {
                for (let xOffset = -1; xOffset <= 1; xOffset++) {
                    if (xOffset === 0 && yOffset === 0) {
                        continue;
                    }
                    const adjacentX = x + xOffset;
                    const adjacentY = y + yOffset;
                    const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                    const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                    if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked") || dataTotal > 0) {
                        continue;
                    } else if (dataTotal == 0) {
                        adjacentCell.classList.add("checked");
                        clickedCell(adjacentCell);
                    }
                }
            }
        }
    }

    function checkCell(cell) {
        const x = parseInt(cell.getAttribute("data-x"), 10);
        const y = parseInt(cell.getAttribute("data-y"), 10);
        setTimeout(function () {
            if (x == 0 && y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            adjacentCell.classList.remove("valid");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.remove("valid");
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (x == 0 && y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (x == width - 1 && y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (x == width - 1 && y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (x == 0) {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = 0; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (y == 0) {
                for (let yOffset = 0; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (x == width - 1) {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 0; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else if (y == height - 1) {
                for (let yOffset = -1; yOffset <= 0; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
            else {
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        if (xOffset === 0 && yOffset === 0) {
                            continue;
                        }
                        const adjacentX = x + xOffset;
                        const adjacentY = y + yOffset;
                        const adjacentCell = document.querySelector(`[data-x="${adjacentX}"][data-y="${adjacentY}"]`);
                        const dataTotal = parseInt(adjacentCell.getAttribute("data-total"), 10);
                        if (adjacentCell.classList.contains("mines") || adjacentCell.classList.contains("flag") || adjacentCell.classList.contains("checked")) {
                            continue;
                        } else if (dataTotal == 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        } else if (dataTotal > 0) {
                            adjacentCell.classList.add("checked");
                            clickedCell(adjacentCell);
                        }
                    }
                }
            }
        }, 10)
        
    }
    let flag = mines;
    function flagCell(cell) {
        const flagLeft = document.querySelector(".flagLeft");
        if (cell.classList.contains("flag")) {
            cell.classList.remove("flag");
            flag += 1;
        } else if (!cell.classList.contains("checked") && flag > 0) {
            cell.classList.add("flag");
            flag -= 1;
        }
        flagLeft.innerHTML = `${flag}`;
    }
    function checkWin() {
        const cells = document.querySelectorAll('.cell');
        let check = 0;
        cells.forEach((cell) => {
            if (cell.classList.contains('checked')) {
                check++
            }
        });
        if (check == width * height - mines) {
            gameStart = false;
            const win = document.getElementById('win');
            win.style.display = "block";
            const selectElement = document.querySelector(".form-select");
            const difficulty = selectElement.value;
            const timer = document.querySelector('.timeUse');
            timer.innerHTML = `${time.toFixed(2)}s`;
            if (difficulty == "boardHard") {
                const button = document.querySelector(".nextBtn");
                button.style.display = "none";
            }
        }
    }
}
function gameOver() {
    gameStart = false;
    const gameOver = document.getElementById('gameOver');
    gameOver.style.display = "block";
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function (cell) {
        if (cell.classList.contains("flag") && cell.classList.contains("mines")) {
            cell.classList.remove("mines");
            cell.classList.remove("flag");
            cell.classList.add("correct");
            cell.classList.add("checked");
        } else if (cell.classList.contains("mines")) {
            cell.classList.remove("mines");
            cell.classList.add("explode");
            cell.classList.add("checked");
        } else if (cell.classList.contains("flag")) {
            cell.classList.remove("flag");
            cell.classList.remove("valid");
            cell.classList.add("wrong");
            cell.classList.add("checked");
        }
    })

}
function restart() {
    const selectElement = document.querySelector(".form-select");
    const difficulty = selectElement.value;
    createGameBoard(difficulty);
    const gameOver = document.getElementById('gameOver');
    const win = document.getElementById('win');
    gameOver.style.display = "none";
    win.style.display = "none";
    time = 0;
    const timer = document.querySelector('.timer');
    timer.innerHTML = "0.00s";
}

function next() {
    const selectElement = document.querySelector(".form-select");
    const difficulty = selectElement.value;
    const win = document.getElementById('win');
    if (difficulty == "boardNormal") {
        createGameBoard("boardMedium");
    } else {
        createGameBoard("boardHard");
    }
    win.style.display = "none";
    time = 0;
    const timer = document.querySelector('.timer');
    timer.innerHTML = "0.00s";
}
