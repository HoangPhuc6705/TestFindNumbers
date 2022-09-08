// Import
import * as list from '../List/list.js';
import * as CreateMatrix from '../matrix/gameplay/game.js';
import * as createTable from '../matrix/createTable.js'

document.querySelector('.start').onclick = () => {
  document.querySelector('h1').style.display = 'none';
  document.querySelector('.choose').style.display = 'none';
  document.querySelector('.background').style.display = 'none';
  createTable.TheMatrix();
}
