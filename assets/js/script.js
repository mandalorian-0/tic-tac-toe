import { createGameEngine } from "./engine.js";

const game = createGameEngine();

game.startGame();

game.makeMove(0);
game.makeMove(4);
game.makeMove(1);
game.makeMove(3);
game.makeMove(2);
// game.makeMove(3);
console.log(game.getWinner());
console.log(game.getBoard());
