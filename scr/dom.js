const addbtnDom = (firstForm, secondForm) => {
  firstForm.classList.remove('block');
    firstForm.classList.add('none');
    secondForm.classList.remove('none')
    secondForm.classList.add('block');
    playerTurn.textContent = `Player ${player1.getName} turn`;
};

const btn2Dom = (secondForm, restart) => {
  secondForm.classList.remove('block');
  secondForm.classList.add('none');
  const board = document.getElementById('board');
  board.classList.remove('none');
  board.classList.add('block');
  restart.classList.remove('none');
  restart.classList.add('block');
};

const p1Name = (p1) => {
  pl.setAttribute('placeholder', 'wrong name');
};

const changeText = (object, text) => {
  object.textContent = text;
};

const coverDom = (cover) => {
  cover.classList.remove('none');
  cover.classList.add('block');
};