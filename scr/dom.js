function adddbtn(btn1, btn2, restart, firstForm, secondForm) {
  btn1.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-1').value === '') {
      const pl = document.getElementById('player-1');
      pl.setAttribute('placeholder', 'wrong name');
    } else {
      player1.getName = document.getElementById('player-1').value;
      firstForm.style.display = 'none';
      secondForm.style.display = 'block';
      playerTurn.textContent = `Player ${player1.getName} turn`;
    }
  });

  btn2.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-2').value === '' || document.getElementById('player-2').value === player1.getName) {
      const pl = document.getElementById('player-2');
      pl.setAttribute('placeholder', 'wrong name');
    } else {
      player2.getName = document.getElementById('player-2').value;
      secondForm.style.display = 'none';
      const board = document.getElementById('board');
      board.style.display = 'block';
      restart.style.display = 'block';
    }
  });

  restart.addEventListener('click', () => {
    window.location.reload();
  });
}
