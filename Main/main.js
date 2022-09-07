// Import
import * as list from '../List/list.js';
import * as CreateMatrix from '../matrix/gameplay/game.js';

// CreateMatrix.Table(5);
document.querySelector('.start').onclick = () => {
  CreateMatrix.Table(list.GetSizeGame);
}
