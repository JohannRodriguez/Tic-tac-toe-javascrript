const Gameboard = () => {
  const winCondition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
    [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  const tcell = document.querySelectorAll('.table-cell');
  return { winCondition, tcell };
};

const Player = (name) => {
  const getPlays = [];
  return { name, getPlays };
};

const game = Gameboard();
const player1 = Player('', 'X');
const player2 = Player('', 'O');

const turn = (player1, player2, playerTurn = '') => {
  if (playerTurn === '') {
    playerTurn = document.getElementById('turn');
  }
  if (playerTurn.textContent === `Player ${player1.getName} turn`) {
  playerTurn.textContent = `Player ${player2.getName} turn`;
  return playerTurn
  } else {
  playerTurn.textContent = `Player ${player1.getName} turn`;
  return playerTurn
  }
};

const gameFlow = (num, playerTurn = '') => {
  if (playerTurn === '') {
    playerTurn = document.getElementById('turn');
  }
  let tie = true;
  playerWinner = '';
  game.winCondition.forEach(win => {
    let counter = 0;
    win.forEach(cool => {
      if (num.includes(cool)) {
        counter += 1;
      }
    });
    if (counter === 3) {
      tie = false;
      if (playerTurn.textContent === `Player ${player1.getName} turn`) {
        playerWinner = `${player1.getName} is the winner!`;
      } else if (playerTurn.textContent === `Player ${player2.getName} turn`) {
        playerWinner = `${player2.getName} is the winner!`;
      }
    }
  });

  if (player1.getPlays.length + player2.getPlays.length === 9 && tie === true) {
    playerWinner = "No winner, it's a tie";
  }
  return { playerWinner };
};

const check = (gameSet) => {
  const cover = document.getElementById('cover-board');
  const winner = document.getElementById('winner');
  if (gameSet.playerWinner.length !== 0) {
    coverDom(cover);
    changeText(winner, gameSet.playerWinner);
  }
};

const adddbtn = (btn1, btn2, restart, firstForm, secondForm) => {
  btn1.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-1').value === '') {
      const pl = document.getElementById('player-1');
      p1Name(pl);
    } else {
      player1.getName = document.getElementById('player-1').value;
      addbtnDom(firstForm, secondForm);
    }
  });

  btn2.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-2').value === '' || document.getElementById('player-2').value === player1.getName) {
      const pl = document.getElementById('player-2');
      p1Name(pl);
    } else {
      player2.getName = document.getElementById('player-2').value;
      btn2Dom(secondForm, restart);
    }
  });

  restart.addEventListener('click', () => {
    window.location.reload();
  });
};

game.tcell.forEach(cell => {
  cell.addEventListener('click', () => {
    const playerTurn = document.getElementById('turn');
    const tableCell = document.getElementById(`xotext-${cell.dataset.cell}`);
    if (playerTurn.textContent === `Player ${player1.getName} turn` && tableCell.textContent === '') {
      changeText(tableCell, 'X');
      const xs = player1.getPlays;
      xs.push(parseInt(cell.dataset.cell, 10));
      player1.getPlays = xs;
      const gameSet = gameFlow(player1.getPlays);
      turn(player1, player2);
      check(gameSet);
    } else if (playerTurn.textContent === `Player ${player2.getName} turn` && tableCell.textContent === '') {
      changeText(tableCell, 'O');
      const os = player2.getPlays;
      os.push(parseInt(cell.dataset.cell, 10));
      player2.getPlays = os;
      const gameSet = gameFlow(player2.getPlays);
      turn(player1, player2);
      check(gameSet);
    }
  });
  const btn1 = document.getElementById('btn-1');
  const btn2 = document.getElementById('btn-2');
  const firstForm = document.getElementById('form-1');
  const secondForm = document.getElementById('form-2');
  const restart = document.getElementById('restart');
  adddbtn(btn1, btn2, restart, firstForm, secondForm);
});


export { Gameboard, Player };