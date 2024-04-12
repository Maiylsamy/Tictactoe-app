let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function makeMove(cellIndex) {
  if (gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      setTimeout(() => {
        showModal(`${gameBoard[a]} wins!`);
        resetGame();
      }, 100);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    setTimeout(() => {
      showModal("It's a draw!");
      resetGame();
    }, 100);
  }
}

document.getElementById('reset-button').addEventListener('click', resetGame);

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
  currentPlayer = 'X';
}

function showModal(message) {
  document.getElementById('modal-text').innerText = message;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
