window.addEventListener("load", function () {
    openPopUp();
  });
  
  const gameGrid = document.getElementById("game-grid");
  
  window.addEventListener("load", function () {
    openPopUp();
  });
  
  function startGame() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;
    let mines = document.getElementById("mines").value;
  
    if ((rows * cols) / 10 > mines) {
      alert("mine had too be more than 10% of the cells");
    } else {
      createGameBoard(rows, cols);
    }
  }
  
  function createGameBoard(rows, cols) {
    // 设置游戏板大小
    document.getElementById(
      "game-grid"
    ).style.gridTemplateColumns = `repeat(${rows}, 40px)`;
    document.getElementById(
      "game-grid"
    ).style.gridTemplateRows = `repeat(${cols}, 40px)`;
    // 清除所有cell
    document.getElementById("game-grid").innerHTML = "";
    // 创建游戏板
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement("div");
        cell.classList.add(`${i}`);
        gameGrid.appendChild(cell);
      }
    }
    for (let i = 0; i < mines; i++) {
      const randomRow = Math.floor(Math.random() * rows);
    }
  }
  
  function openPopUp() {}
  