// Import
import * as list from '../List/list.js';
import * as CreateMatrix from '../matrix/gameplay/game.js';
import * as createTable from '../matrix/createTable.js';
import * as MintoMax from '../Mode/Mintomax.js';
import * as time from '../time/times.js'

var a;
var TurnOn = false;
document.querySelector('.start').onclick = () => {
  document.querySelector('.choose').style.animation = 'Close .5s';
  document.querySelector('.title').style.animation = 'opacity .5s';
  document.querySelector('.clock').style.animation = 'opacity .5s';
  setTimeout(() => {
    document.querySelector('h1').remove();
    document.querySelector('.choose').remove();
    document.querySelector('.background').remove();
  }, 500)

  setTimeout(() => {
    createTable.TheMatrix();

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './Mode/choose.css';
    document.head.appendChild(style);

    document.querySelector('table').style.fontSize = `${9 - list.GetSizeGame}vw`;

    TestMode();

    TableEffect();

    time.DigitalClock();
    time.thetime(list.GetTimeGame)
    time.Timeremaining();
    document.querySelector('.DigitalClock').style.visibility = 'hidden';
    setTimeout(() => {
      document.querySelector('.DigitalClock').style.visibility = 'unset';
      document.querySelector('.DigitalClock').style.animation = 'timebox 0.5s';
      a = setInterval(time.Timeremaining, 1000);
    }, list.GetSizeGame * 100 + 1000);


  }, 1000);

}

var TableEffect = () => {
  for (let i in CreateMatrix.Matrix) {
    for (let j in CreateMatrix.Matrix) {
      document.querySelectorAll('tr')[i].querySelectorAll('td')[j].style.visibility = 'hidden';
    }
  }
  setTimeout(() => {
    for (let i in CreateMatrix.Matrix) {
      for (let j in CreateMatrix.Matrix) {
        setTimeout(() => {
          document.querySelectorAll('tr')[i].querySelectorAll('td')[j].style.visibility = 'unset';
          document.querySelectorAll('tr')[i].querySelectorAll('td')[j].style.animation = 'box 0.5s';
        }, (i * 100));
      }
    }
  }, 500);
}

var TestMode = () => {
  MintoMax.MintoMax();
}

export {
  list,
  CreateMatrix,
  createTable,
  MintoMax,
  a
}