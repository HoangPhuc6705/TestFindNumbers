// Import
import * as list from './List/list.js';
import * as CreateMatrix from './matrix/gameplay/game.js';
import * as createTable from './matrix/createTable.js';
import * as MintoMax from './Mode/Mintomax.js';
import * as time from './time/times.js';
import setting_info from './Main/infogame/infogame.js';
import * as load from './Loading/loading.js';

document.body.onload = () => {
  load.Intro();
};

var a;
var TurnOn = false;
document.querySelector('.start').onclick = () => {
  StartGame();
}

var StartGame = () => {
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

    if (window.matchMedia("(max-width: 700px)").matches) {
      // Chỉnh cỡ chữ theo điện thoại
      document.querySelector('table').style.fontSize = list.GetSizeGame == 10 ? `${11 - list.GetSizeGame + 0.8}vw` : `${11 - list.GetSizeGame - 2}vw`;
      console.log(list.GetSizeGame == 10 ? `${11 - list.GetSizeGame + 0.8}vw` : `${11 - list.GetSizeGame - 2}vw`);
    } else {
      // Chỉnh cỡ chữ theo máy tính
      document.querySelector('table').style.fontSize = list.GetSizeGame == 10 ? `${11 - list.GetSizeGame + 0.8}vw` : `${11 - list.GetSizeGame - 2}vw`;
      console.log(list.GetSizeGame == 10 ? `${11 - list.GetSizeGame + 0.8}vw` : `${11 - list.GetSizeGame - 2}vw`);
    }

    setting_info();

    TestMode();

    TableEffect();

    time.DigitalClock();
    time.thetime(list.GetTimeGame)
    time.Timeremaining();
    document.querySelector('.DigitalClock').style.visibility = 'hidden';
    setTimeout(() => {
      guide();
      document.querySelector('.DigitalClock').style.visibility = 'unset';
      document.querySelector('.DigitalClock').style.animation = 'timebox 0.5s';
      a = setInterval(time.Timeremaining, 1000);
    }, list.GetSizeGame * 200 + 1000);
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
        }, (i * 200));
      }
    }
  }, 500);
}

var TestMode = () => {
  MintoMax.MintoMax();
}

var guide = () => {
  const text = document.createElement('p');
  text.className = 'guide';
  text.innerHTML = `Chọn một ô bạn cho là đúng`;
  document.body.appendChild(text);
  text.style.animation = 'guideOn 0.5s';

  setTimeout(() => {
    text.style.animation = 'guideOff 0.5s';
    setTimeout(() => {
      text.style.visibility = 'hidden';
    }, 500)
  }, 5000);
}

export {
  list,
  CreateMatrix,
  createTable,
  MintoMax,
  a
}