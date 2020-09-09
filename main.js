
let xs = [];
let os = [];
const winCondition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
const cellSelector = document.querySelectorAll('.table-cell');
const playerTurn = document.getElementById('turn');

function turn(){
  if(playerTurn.textContent == 'Player X turn'){
    playerTurn.textContent =  'Player O turn'
  }else{
    playerTurn.textContent =  'Player X turn'
  }
}

function check(num){
  winCondition.forEach(win => {
    let counter = 0
    win.forEach(cool => {
      if (num.includes(cool)){
        counter += 1
      }
    })
    if (counter === 3){
      console.log('you are the winner')
    }
  })
}

cellSelector.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log(cell.dataset.cell);
        const tableCell = document.getElementById(`xotext-${cell.dataset.cell}`);
        if(playerTurn.textContent == 'Player X turn' && tableCell.textContent == ''){
          tableCell.textContent = 'X'
          xs.push(parseInt(cell.dataset.cell))
          check(xs)
          turn()
        }else if(playerTurn.textContent == 'Player O turn' && tableCell.textContent == ''){
          tableCell.textContent = 'O'
          os.push(parseInt(cell.dataset.cell))
          check(os)
          turn()
        }
    });
});
const fragment = document.createDocumentFragment();