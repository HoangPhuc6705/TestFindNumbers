import * as Value from '../List/list.js'
import * as matrix from './gameplay/game.js'

var TheMatrix = () => {
  matrix.Table(Value.GetSizeGame);

  const box = document.createElement('div');
  box.className = 'The-table';
  document.body.appendChild(box);

  const theTable = document.createElement('table');
  box.appendChild(theTable);

  const rows = document.createElement('tr');
  for (let i in matrix.Matrix) {
    const rows = document.createElement('tr');
    theTable.appendChild(rows);
    for (let j in matrix.Matrix) {
      const columns = document.createElement('td');
      columns.onclick = () => {
        alert();
      }
      const numbers = document.createElement('p');
      numbers.className = 'numbers';
      numbers.innerHTML = matrix.Matrix[i][j];
      columns.appendChild(numbers);
      rows.appendChild(columns);
    }
  }
}

export {
  Value,
  matrix,
  TheMatrix
}