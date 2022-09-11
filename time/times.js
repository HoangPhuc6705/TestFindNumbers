import { GetTimeGame } from '../List/list.js';
import { a } from '../Main/main.js'
import { PseudoMatrix } from '../matrix/gameplay/game.js';

var Minutes,
  Second;

var thetime = (x) => {
  // Minutes = 0;
  // Second = 20;

  Second = 60 * x;
}

var Timeremaining = () => {
  Minutes = Math.floor(Second / 60);
  let Sc = Second % 60;
  halftime();
  if (Second <= 30) {
    flicker();
  }
  if (Second < 1) {
    document.querySelector('.DigitalClock div p').innerHTML = `${check(Minutes)}:${check(Sc)}`;
    Loss();
    clearInterval(a);
    return false;
  }
  // console.log(`${Minutes}:${check(Sc)}`);
  document.querySelector('.DigitalClock div p').innerHTML = `${check(Minutes)}:${check(Sc)}`;
  Second--;
}
var check = (i) => {
  if (i < 10) return `0${i}`;
  return i;
}

var DigitalClock = () => {
  const clockOutside = document.createElement('div');
  clockOutside.className = 'DigitalClock';
  const clockoutside2 = document.createElement('div');
  clockOutside.appendChild(clockoutside2);
  const clock = document.createElement('p');
  clockoutside2.appendChild(clock);
  document.body.appendChild(clockOutside);
}

var halftime = () => {
  if (Second == Math.floor((GetTimeGame * 60) / 2)) {
    note(`Một nửa thời gian đã trôi qua...`);
  }

  if (Second == 10) {
    note(`Còn ${Second} giây cuối cùng !`);
  }

  if (Second == 0) {
    note(`HẾT GIỜ !`)
  }
}

var flicker = () => {
  document.querySelector('.DigitalClock div p').style.animation = 'flicker 0.75s';
  setTimeout(() => {
    document.querySelector('.DigitalClock div p').style.animation = 'none';
  }, 750);
}

var note = (noti) => {
  const text = document.querySelector('.guide');
  text.style.animation = 'none';

  text.innerHTML = noti;

  text.style.animation = 'guideOn 0.5s';
  setTimeout(() => {
    text.style.visibility = 'unset';
  }, 500)
  text.style.visibility = 'unset';
  setTimeout(() => {
    text.style.animation = 'guideOff 0.5s';
    setTimeout(() => {
      text.style.visibility = 'hidden';
    }, 500)
  }, 5000);
}

var Loss = () => {
  for (let i in PseudoMatrix) {
    for (let j in PseudoMatrix) {
      PseudoMatrix[i][j] = 2;
    }
  }
}

export {
  Timeremaining,
  Minutes,
  Second,
  check,
  thetime,
  DigitalClock,
}