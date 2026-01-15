# Tic Tac Toe Game

A classic Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS. Play against a friend in this interactive browser-based game.

## 🎮 Features

- **Two-player gameplay**: Take turns playing as X or O
- **Win detection**: Automatically detects wins in rows, columns, and diagonals
- **Draw detection**: Recognizes when the game ends in a tie
- **Game state management**: Prevents moves after game ends
- **Visual feedback**: Shows current player and updates the board in real-time
- **Reset functionality**: Restart the game at any time
- **Input validation**: Prevents placing markers on occupied cells

## 🚀 Getting Started

### Prerequisites

No dependencies required! Just a modern web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samuelitoo01/Tic-Tac-Toe-Game.git
cd Tic-Tac-Toe-Game
```

2. Open `index.html` in your web browser:
   - Simply double-click the `index.html` file, or
   - Use a local server (recommended):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
Tic-Tac-Toe-Game/
├── index.html      # Main HTML structure
├── game.js         # Game logic and functionality
├── styles.css      # Styling and layout
├── README.md       # Project documentation
└── LICENSE         # MIT License
```

## 🎯 How to Play

1. The game starts with player **X**
2. Click on any empty cell to place your marker
3. Players alternate turns (X → O → X...)
4. Win by getting three markers in a row (horizontal, vertical, or diagonal)
5. If all cells are filled without a winner, it's a draw
6. Click "Reiniciar juego" (Restart game) to start a new game

## 💻 Technical Details

### Game Logic

- **Board representation**: 3x3 matrix stored in JavaScript
- **Win conditions**: Checks rows, columns, and both diagonals
- **State management**: Tracks active game state and current player
- **Event-driven**: Uses click events to handle player moves

### Functions

- `game(fila, columna)`: Main game function that processes moves
- `revisarColumna()`: Checks for vertical wins
- `revisarFila()`: Checks for horizontal wins
- `revisarDiagonalDerecha()`: Checks diagonal from top-right to bottom-left
- `revisarDiagonalIzquierda()`: Checks diagonal from top-left to bottom-right
- `empate()`: Detects when the game ends in a draw

## 🎨 Styling

- Clean, modern interface
- Responsive grid layout using CSS Grid
- Centered game board
- Visual feedback with cursor pointers
- System font stack for cross-platform consistency

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling and layout (Grid, Flexbox)
- **JavaScript (ES6+)**: Game logic and DOM manipulation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Samuel Esteban Sarmiento Galvez

## 👤 Author

**Samuel Esteban Sarmiento Galvez**

- GitHub: [@samuelitoo01](https://github.com/samuelitoo01)
- Repository: [Tic-Tac-Toe-Game](https://github.com/samuelitoo01/Tic-Tac-Toe-Game)

---

Enjoy playing Tic Tac Toe! 🎉
