let currentPlayer = "cow";
let board = ["", "", "", "", "", "", "", "", ""];
var playerMode;
var playMove = 1;
var gameStop = 0;
const text = document.querySelector(".text");
const gameOver = document.getElementById("gameOver");

playMode("com");

function playMode(mode) {
  if (mode === "com") {
    console.log("Computer mode");
    playerMode = "com";
    restart();
  } else if (mode === "2P") {
    playerMode = "2P";
    restart();
  } else if (mode === "unbeat") {
    playerMode = "unbeat";
    restart();
  }
}

function play(cell, index) {
  if (
    !cell.classList.contains("cow") &&
    !cell.classList.contains("horse") &&
    playMove === 1
  ) {
    cell.classList.add(currentPlayer);
    board[index] = currentPlayer;
    checkWin();
    if (gameStop == 0){
      togglePlayer();
    } 
  }
}

function togglePlayer() {
  console.log("togglePlayer")
  currentPlayer = currentPlayer === "cow" ? "horse" : "cow";
  const horse = document.querySelector(".pHorse");
  const cow = document.querySelector(".pCow");
  if (currentPlayer === "horse") {
    horse.classList.add("pTurn");
    cow.classList.remove("pTurn");
  } else {
    horse.classList.remove("pTurn");
    cow.classList.add("pTurn");
  }
  checkWin();
  console.log(playerMode,currentPlayer,gameStop)
  if (playerMode === "com" && currentPlayer === "horse" && gameStop === 0) {
    console.log("computer move")
    setTimeout(computerMove, 500);
  }
  if (playerMode === "unbeat" && currentPlayer === "horse" && gameStop === 0) {
    setTimeout(bestMove, 500);
  }
}

function computerMove() {
  randomMove();
  playMove = 1;
  checkWin();
  if(gameStop === 0){
  togglePlayer();
  }
}

function bestMove() {
  // 获取空白单元格的索引
  let emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptyCells.push(i);
    }
  }

  // 利用 Minimax 算法选择最佳移动
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < emptyCells.length; i++) {
    board[emptyCells[i]] = "horse"; // 假设当前空白单元格是 AI 执行移动
    let score = minimax(board, 0, false); // 调用 Minimax 算法计算分数
    board[emptyCells[i]] = ""; // 撤销当前移动
    console.log(emptyCells[i] + " " + score);
    if (score > bestScore) {
      bestScore = score;
      move = emptyCells[i];
    }
  }
  console.log("------")
  playMove = 1;
  cells(move);
  checkWin();
  if(gameStop === 0){
    togglePlayer();
  }
}

function minimax(board, depth, isMaximizing) {
  let result = checkWinner(); // 检查游戏状态
  if (result !== null) {
    // 如果游戏结束，返回得分
    if (result === "horse") {
      return depth + 10;
    } else if (result === "cow") {
      return depth - 10;
    } else {
      return 0;
    }
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "horse";
        let score = minimax(board, depth - 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = "cow";
        let score = minimax(board, depth - 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 返回获胜者（"AI" 或 "player"）
    }
  }

  if (board.every((cell) => cell !== "")) {
    return "draw"; // 返回平局
  }

  return null; // 游戏未结束
}

function cells(x) {
    const cell = document.querySelectorAll(".c")[x];
    cell.classList.add(currentPlayer);
    board[x] = currentPlayer;
}

function randomMove() {
  const emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptyCells.push(i);
    }
  }
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const cell = document.querySelectorAll(".c")[emptyCells[randomIndex]];
  cell.classList.add(currentPlayer);
  board[emptyCells[randomIndex]] = currentPlayer;
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameStop = 1;
      win();
      return;
    }
  }

  if (board.every((cell) => cell !== "")) {
    gameStop = 1;
    draw();
  }
}

function win() {
  gameStop = 1;
    const cell = document.querySelectorAll(".c");
  gameOver.style.display = "block";
  if (playerMode === "com") {
    if (currentPlayer == "cow") {
      text.style.backgroundImage = "url('./img/youWin.png')";
    } else {
      text.style.backgroundImage = "url('./img/comWin.png')";
    }
  } else if (playerMode === "2P") {
    if (currentPlayer === "horse") {
      text.style.backgroundImage = "url('./img/horseWin.png')";
    } else {
      text.style.backgroundImage = "url('./img/cowWin.png')";
    }
  } else if (playerMode === "unbeat") {
    if (currentPlayer === "cow") {
      text.style.backgroundImage = "url('./img/youWin.png')";
    } else {
      text.style.backgroundImage = "url('./img/comWin.png')";
    }
  }
}

function draw() {
  gameOver.style.display = "block";
  text.style.backgroundImage = "url('./img/draw.png')";
}

function restart() {
  gameStop = 0;
  playMove = 1;
  const gameOver = document.getElementById("gameOver");
  gameOver.style.display = "none";
  const cells = document.querySelectorAll(".c");
  cells.forEach(function (cell) {
    cell.classList.remove("cow", "horse");
  });
  board = ["", "", "", "", "", "", "", "", ""];
  const horse = document.querySelector(".pHorse");
  const cow = document.querySelector(".pCow");
  horse.classList.remove("pTurn");
  cow.classList.add("pTurn");
  currentPlayer = "cow";
  let choose = Math.floor(Math.random() *2)
  if (choose === 0) {
    if (playerMode != "2P") {
      playMove = 0;
    }
    togglePlayer();
  }
}
