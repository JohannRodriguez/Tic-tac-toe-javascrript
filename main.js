
let xs = [];
let os = [];
const winCondition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
const cellSelector = document.querySelectorAll('.table-cell');
const playerTurn = document.getElementById('turn');
let player1 = '';
let player2 = '';

function turn(){
  if(playerTurn.textContent == `Player ${player1} turn`){
    playerTurn.textContent =  `Player ${player2} turn`
  }else{
    playerTurn.textContent =  `Player ${player1} turn`
  }
}

function check(num){
    const winner = document.getElementById('winner');
    const cover = document.getElementById('cover-board');
    let tie = true
  winCondition.forEach(win => {
    let counter = 0
    win.forEach(cool => {
      if (num.includes(cool)){
        counter += 1
      }
    })
    if (counter === 3){
      cover.style.display = 'block'
      tie = false;
      if (playerTurn.textContent === `Player ${player1} turn`) {
        winner.textContent = `${player1} is the winner!`
        playerTurn.textContent = '';
      } else if (playerTurn.textContent === `Player ${player2} turn`) {
        winner.textContent = `${player2} is the winner!`
        playerTurn.textContent = '';
      }
         
      console.log('you are the winner')
    } 
  })
  if (xs.length + os.length === 9 && tie === true){
    cover.style.display = 'block'
    winner.textContent = "No winner, it's a tie";
  }
}

cellSelector.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log(cell.dataset.cell);
        const tableCell = document.getElementById(`xotext-${cell.dataset.cell}`);
        if(playerTurn.textContent == `Player ${player1} turn` && tableCell.textContent == ''){
          tableCell.textContent = 'X'
          xs.push(parseInt(cell.dataset.cell))
          check(xs)
          turn()
        }else if(playerTurn.textContent == `Player ${player2} turn` && tableCell.textContent == ''){
          tableCell.textContent = 'O'
          os.push(parseInt(cell.dataset.cell))
          check(os)
          turn()
        }
    });
});

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const firstForm = document.getElementById('form-1');
const secondForm = document.getElementById('form-2');
const restart = document.getElementById('restart');


btn1.addEventListener('click', (event) => {
  event.preventDefault();
  if (document.getElementById('player-1').value == '') {
    console.log('Invalid name');
  } else {
    player1 = document.getElementById('player-1').value;
    firstForm.style.display = 'none';
    secondForm.style.display = 'block';
    playerTurn.textContent = `Player ${player1} turn`
  }
  console.log(player1)
});

btn2.addEventListener('click', (event) => {
    event.preventDefault();
    if (document.getElementById('player-2').value === '' || document.getElementById('player-2').value === player1) {
      console.log('Invalid name');
    } else {
      player2 = document.getElementById('player-2').value;
      secondForm.style.display = 'none';
      const board = document.getElementById('board');
      board.style.display = 'block';
      restart.style.display = 'block'
    }
    console.log(player2)
  });


  restart.addEventListener('click', () => {
    location.reload();
  });