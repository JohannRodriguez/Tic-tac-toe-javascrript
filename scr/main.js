const playerTurn = document.getElementById('turn');

const Gameboard = () => {
  const winCondition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  const tcell = document.querySelectorAll('.table-cell');
  return { winCondition, tcell };
};

const Player = (name) => {
  const getName = () => name;
  const getPlays = [];
  return { getName, getPlays };
};
const game = Gameboard();
const player1 = Player('', 'X');
const player2 = Player('', 'O');

function turn() {
  if (playerTurn.textContent === `Player ${player1.getName} turn`) {
    playerTurn.textContent = `Player ${player2.getName} turn`;
  } else {
    playerTurn.textContent = `Player ${player1.getName} turn`;
  }
}

function check(num) {
  const winner = document.getElementById('winner');
  const cover = document.getElementById('cover-board');
  let tie = true;
  game.winCondition.forEach(win => {
    let counter = 0;
    win.forEach(cool => {
      if (num.includes(cool)) {
        counter += 1;
      }
    });
    if (counter === 3) {
      cover.style.display = 'block';
      tie = false;
      if (playerTurn.textContent === `Player ${player1.getName} turn`) {
        winner.textContent = `${player1.getName} is the winner!`;
        playerTurn.textContent = '';
      } else if (playerTurn.textContent === `Player ${player2.getName} turn`) {
        winner.textContent = `${player2.getName} is the winner!`;
        playerTurn.textContent = '';
      }
    }
  });
  if (player1.getPlays.length + player2.getPlays.length === 9 && tie === true) {
    cover.style.display = 'block';
    winner.textContent = "No winner, it's a tie";
  }
}

game.tcell.forEach(cell => {
  cell.addEventListener('click', () => {
    const tableCell = document.getElementById(`xotext-${cell.dataset.cell}`);
    if (playerTurn.textContent === `Player ${player1.getName} turn` && tableCell.textContent === '') {
      tableCell.textContent = 'X';
      const xs = player1.getPlays;
      xs.push(parseInt(cell.dataset.cell, 10));
      player1.getPlays = xs;
      check(player1.getPlays);
      turn();
    } else if (playerTurn.textContent === `Player ${player2.getName} turn` && tableCell.textContent === '') {
      tableCell.textContent = 'O';
      const os = player2.getPlays;
      os.push(parseInt(cell.dataset.cell, 10));
      player2.getPlays = os;
      check(player2.getPlays);
      turn();
    }
  });
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const firstForm = document.getElementById('form-1');
  const secondForm = document.getElementById('form-2');
  const restart = document.getElementById('restart');
  adddbtn(btn1, btn2, restart, firstForm, secondForm);
});
