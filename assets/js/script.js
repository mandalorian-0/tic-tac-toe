import { createGameEngine } from "./engine.js";

const gameEngine = createGameEngine();

// DOM Elements
const boardElements = document.querySelectorAll(".cell");
const turnDisplay = document.getElementById("turn");
const winnerDisplay = document.getElementById("winner");
const newGameButton = document.getElementById("new-game");

// Update functions
function updateBoard(boardArray) {
  boardArray.forEach((cellValue, index) => {
    const cell = boardElements[index];
    if (cell) {
      cell.textContent = cellValue || "";
    }
  });
}
function updateTurn(player) {
  turnDisplay.textContent = `Player ${player}'s turn`;
}

function updateWinner(winner, isGameOver) {
  if (winner) {
    winnerDisplay.textContent = `Winner: ${winner}`;
    winnerDisplay.classList.remove("hidden");
    turnDisplay.classList.add("hidden");
  } else if (isGameOver) {
    winnerDisplay.textContent = "It's a draw!";
    winnerDisplay.classList.remove("hidden");
    turnDisplay.classList.add("hidden");
  } else {
    winnerDisplay.classList.add("hidden");
    turnDisplay.classList.remove("hidden");
  }
}

// Event Listeners
newGameButton.addEventListener("click", () => {
  gameEngine.startGame();
  updateBoard(gameEngine.getBoard());
  updateTurn(gameEngine.getCurrentPlayer());
  updateWinner(gameEngine.getWinner(), gameEngine.isGameOver());
});

boardElements.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = parseInt(cell.getAttribute("data-index"));
    const result = gameEngine.makeMove(index);
    if (result === null) return;

    // Update UI after move
    updateBoard(gameEngine.getBoard());
    updateTurn(gameEngine.getCurrentPlayer());
    updateWinner(gameEngine.getWinner(), gameEngine.isGameOver());
  });
});

// Start game on load
gameEngine.startGame();
updateBoard(gameEngine.getBoard());
updateTurn(gameEngine.getCurrentPlayer());
updateWinner(gameEngine.getWinner(), gameEngine.isGameOver());
