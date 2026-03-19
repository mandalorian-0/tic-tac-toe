export function createGameEngine() {
  let board;
  let currentPlayer;
  let winner;
  let gameOver;

  function startGame() {
    board = Array(9).fill(null);
    currentPlayer = "X";
    winner = null;
    gameOver = false;
  }

  function checkWinner() {
    const winnigCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo in winnigCombos) {
      const [a, b, c] = combo;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function isDraw() {
    return board.every((cell) => cell !== null) && !winner;
  }

  function makeMove(index) {
    if (!board) throw new Error("Game not started");

    if (gameOver) return null;

    if (index < 0 || index > 8) return null;

    if (board[index] !== null) return null;

    board[index] = currentPlayer;

    const result = checkWinner();

    if (result === "X" || result === "O") {
      winner = result;
      gameOver = true;
    } else if (isDraw()) {
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  function getBoard() {
    return [...board];
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  function getWinner() {
    return winner;
  }

  function isGameOver() {
    return gameOver;
  }

  return Object.freeze({
    startGame,
    makeMove,
    getBoard,
    getCurrentPlayer,
    getWinner,
    isGameOver,
  });
}
