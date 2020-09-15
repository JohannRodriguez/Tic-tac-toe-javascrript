const adddbtn = (btn1, btn2, restart, firstForm, secondForm) => {
  btn1.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-1').value === '') {
      const pl = document.getElementById('player-1');
      pl.setAttribute('placeholder', 'wrong name');
    } else {
      player1.getName = document.getElementById('player-1').value;
      firstForm.classList.remove('block');
      firstForm.classList.add('none');
      secondForm.classList.remove('none')
      secondForm.classList.add('block');
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
      secondForm.classList.remove('block');
      secondForm.classList.add('none');
      const board = document.getElementById('board');
      board.classList.remove('none');
      board.classList.add('block');
      restart.classList.remove('none');
      restart.classList.add('block');
    }
  });

  restart.addEventListener('click', () => {
    window.location.reload();
  });
}
