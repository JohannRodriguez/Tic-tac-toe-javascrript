

const cellSelector = document.querySelectorAll('.table-cell');

cellSelector.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log(cell.dataset.cell)
        const tableCell = document.getElementById(`cell-${cell.dataset.cell}`)
        tableCell.textContent = ""
    });
});

const fragment = document.createDocumentFragment();