import { a } from '../Main/main.js'
import { PseudoMatrix } from '../matrix/gameplay/game.js';

var Minutes,
  Second;

var thetime = (x) => {
    // Minutes = 0;
    Second = 60 * x;
    // Second = 5;
}

var Timeremaining = () => {
  Minutes = Math.floor(Second / 60);
  let Sc = Second % 60;
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

var Loss = () => {
  for (let i in PseudoMatrix) {
    for (let j in PseudoMatrix) {
      PseudoMatrix[i][j] = 2;
    }
  }
  console.log(PseudoMatrix);
}

export {
  Timeremaining,
  Minutes,
  Second,
  check,
  thetime,
  DigitalClock,
}