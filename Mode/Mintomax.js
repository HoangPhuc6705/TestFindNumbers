import * as main from '../Main/main.js'
import { a } from '../Main/main.js';

var MintoMax = () => {
  if (main.list.GetModeGame != 'Min to Max') return;

  for (let i in main.CreateMatrix.PseudoMatrix) {
    for (let j in main.CreateMatrix.PseudoMatrix) {
      if (main.CreateMatrix.Matrix[i][j] == 1) {
        main.CreateMatrix.PseudoMatrix[i][j] = 1;
      }
      document.querySelectorAll('tr')[i].querySelectorAll('td')[j].onclick = () => {
        ChooseBox(i, j);
      }
    }
  }
  // console.log(main.CreateMatrix.PseudoMatrix)
}

var ChooseBox = (x, y) => {
  var A = main.CreateMatrix.Matrix;

  // Wrong
  if ((main.CreateMatrix.PseudoMatrix[x][y] == 0) || (main.CreateMatrix.PseudoMatrix[x][y] == 2)) {
    return false;
  }

  // True
  main.CreateMatrix.PseudoMatrix[x][y] = 2;
  document.querySelectorAll('tr')[x].querySelectorAll('td')[y].style.animation = 'true 0.5s'
  document.querySelectorAll('tr')[x].querySelectorAll('td')[y].style.visibility = 'hidden';

  // Back end
  if (A[x][y] == main.list.GetSizeGame * main.list.GetSizeGame) {
    clearInterval(a);
    return false;
  }
  for (let i in A) {
    for (let j in A) {
      if (A[i][j] == A[x][y] + 1) {
        main.CreateMatrix.PseudoMatrix[i][j] = 1;
      }
    }
  }
}

export {
  MintoMax,
  ChooseBox
}