import { GetSizeGame } from '../List/list.js';
import * as main from '../main.js'
import { a } from '../main.js';
import * as Result from '../Main/WinLoss/winloss.js';
import { PseudoMatrix } from '../matrix/gameplay/game.js';
import { note } from '../time/times.js';

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

var encourage = 0;
var ChooseBox = (x, y) => {
  var A = main.CreateMatrix.Matrix;
  encourage++;

  // Wrong
  if ((main.CreateMatrix.PseudoMatrix[x][y] == 0) || (main.CreateMatrix.PseudoMatrix[x][y] == 2)) {
    if (PseudoMatrix[x][y] == 0) {
      note(`Ơ kìa sai rồi bạn`, 2000);
    }
    return false;
  }

  // True
  Encourage();
  main.CreateMatrix.PseudoMatrix[x][y] = 2;
  document.querySelectorAll('tr')[x].querySelectorAll('td')[y].style.animation = 'true 0.5s'
  document.querySelectorAll('tr')[x].querySelectorAll('td')[y].style.visibility = 'hidden';

  // Back end
  if (A[x][y] == main.list.GetSizeGame * main.list.GetSizeGame) {
    clearInterval(a);
    const noti = document.querySelector('.guide');
    noti.style.visibility = 'visible';
    noti.innerHTML = `Xuất sắc quá anh iuuu <3`;
    setTimeout(() => {
      Result.Winer();
    }, 2000)
    return true;
  }
  for (let i in A) {
    for (let j in A) {
      if (A[i][j] == A[x][y] + 1) {
        main.CreateMatrix.PseudoMatrix[i][j] = 1;
      }
    }
  }
}

var Encourage = () => {
  if (encourage == Math.floor((main.list.GetSizeGame * main.list.GetSizeGame) / 2)) {
    note(`Quá tuyệt vời! Cố lên !!`, 2000);
  }
  if (encourage == (GetSizeGame * GetSizeGame - Math.floor(GetSizeGame * GetSizeGame / 4))) {
    note(`Còn một xíu nữa thôi, tiến lên !!`, 2000);
  }
}

export {
  MintoMax,
  ChooseBox
}