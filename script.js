let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let tieCount = 0;
let winCount = 0;
let lossCount = 0;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner(board) {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(cell => cell !== '')) {
    return 'T';
  }
  return null;
}

function updateCounter(result) {
  if (result === 'T') {
    tieCount++;
    document.getElementById('tieCounter').innerText = tieCount;
  } else if (result === currentPlayer) {
    if (currentPlayer === 'X') {
      winCount++;
      document.getElementById('winCounter').innerText = winCount;
    } else {
      lossCount++;
      document.getElementById('lossCounter').innerText = lossCount;
    }
  } else if (currentPlayer === 'O') {
    winCount++;
    document.getElementById('winCounter').innerText = winCount;
  }
}

function playerMove(cellIndex) {
  if (!gameActive || gameBoard[cellIndex] !== '') return;

  gameBoard[cellIndex] = currentPlayer;
  document.getElementById('game-board').children[cellIndex].innerText = currentPlayer;
  
  const winner = checkWinner(gameBoard);
  if (winner) {
    gameActive = false;
    if (winner === 'T') {
      document.getElementById('result').innerText = "It's a Tie!";
    } else {
      document.getElementById('result').innerText = `${winner} Wins!`;
    }
    updateCounter(winner);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer === 'O') {
      setTimeout(botMove, 500); // Delay bot move for better visualization
    }
  }
}

function botMove() {
  let emptyCells = gameBoard.reduce((acc, cell, index) => {
    if (cell === '') {
      acc.push(index);
    }
    return acc;
  }, []);

  // Check if the bot can win in the next move
  for (let index of emptyCells) {
    let tempBoard = [...gameBoard];
    tempBoard[index] = currentPlayer;
    if (checkWinner(tempBoard) === currentPlayer) {
      playerMove(index);
      return;
    }
  }

  // Check if the player can win in the next move and block
  for (let index of emptyCells) {
    let tempBoard = [...gameBoard];
    tempBoard[index] = currentPlayer === 'X' ? 'O' : 'X';
    if (checkWinner(tempBoard) === (currentPlayer === 'X' ? 'O' : 'X')) {
      playerMove(index);
      return;
    }
  }

  // Otherwise, make a random move
  let randomIndex = Math.floor(Math.random() * emptyCells.length);
  let botChoice = emptyCells[randomIndex];
  playerMove(botChoice);
}


function resetGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('result').innerText = '';
  Array.from(document.getElementById('game-board').children).forEach(cell => cell.innerText = '');
}

function resetCounters() {
  tieCount = 0;
  winCount = 0;
  lossCount = 0;
  document.getElementById('tieCounter').innerText = tieCount;
  document.getElementById('winCounter').innerText = winCount;
  document.getElementById('lossCounter').innerText = lossCount;
}

function exitGame() {
    window.close(); // Close the current tab or window
}
