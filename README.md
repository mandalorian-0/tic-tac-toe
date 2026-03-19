# 🎮 Tic-Tac-Toe Game Engine & UI

A simple, standalone Tic-Tac-Toe game built with **pure JavaScript**, featuring a clean, responsive UI and a modular game engine.

This project demonstrates how to separate **game logic** from **user interface** in a real-world application — without using any frameworks (React, Vue, etc.).

---

## 🔧 Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript (vanilla JS)
- **No frameworks** (React, Vue, Svelte, etc.)
- **No build tools** (no Vite, Webpack, etc.)
- **Fully self-contained** — runs in any modern browser

---

## 🚀 How to Run

1. **Copy the entire code** from `index.html` (in the full code section above).
2. **Save it as `index.html`** in a folder on your computer.
3. **Open it in any web browser** (Chrome, Firefox, Safari, Edge).
4. Play the game — click cells to make moves, start a new game, and see the winner!

✅ No server needed. No setup. Just open the file.

---

## 🔍 How It Works

### 🏗️ Core Game Engine

- A reusable, modular JavaScript function called `createGameEngine()`
- Manages:
  - Game state (`board`, `currentPlayer`, `winner`, `gameOver`)
  - Move validation
  - Win detection (8 winning combinations)
  - Draw detection
- All logic is **pure and stateless** — it returns data, never modifies DOM directly

### 🖼️ UI Layer

- Built with **HTML + CSS + vanilla JS**
- Displays:
  - 3×3 board (clickable cells)
  - Turn indicator ("Player X’s turn")
  - Winner message (if game ends)
  - "New Game" button
- Updates **in real-time** after every move using:
  - `updateBoard()`
  - `updateTurn()`
  - `updateWinner()`

### 🔄 Flow

1. Game starts → board is empty, X’s turn
2. User clicks a cell → `makeMove()` is called
3. Engine updates state → checks for win/draw
4. UI updates immediately → shows new board, turn, or winner
5. Game ends → no more moves allowed

> The engine and UI are **completely decoupled** — you can reuse the engine in other UIs (e.g., mobile, desktop, or a different design).

---

## ✅ Features

- ✅ Fully responsive design (works on mobile & desktop)
- ✅ Real-time UI updates
- ✅ Win/draw detection with correct logic
- ✅ Clean separation of logic and UI
- ✅ No external dependencies
- ✅ Hover effects and smooth transitions
- ✅ Simple to understand and modify

---

## 🚀 Future Improvements

- Add sound effects on moves or wins
- Add animations (e.g., X/O fade in)
- Implement dark mode toggle
- Add AI opponent (computer plays randomly)
- Port to desktop (Electron or React Native)
- Add score tracking or multiplayer mode

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it for any purpose.
