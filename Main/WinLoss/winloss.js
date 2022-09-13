import { Intro } from "../../Loading/loading.js";
var Winer = () => {
  const box = document.createElement('div');
  box.className = 'WinGameBox';
  document.body.appendChild(box);

  const text = document.createElement('h1');
  text.innerHTML = 'VICTORY';
  box.appendChild(text);

  // .WinLostText
}

var Loser = () => {
  const box = document.createElement('div');
  box.className = 'WinGameBox';
  document.body.appendChild(box);

  const text = document.createElement('h1');
  text.innerHTML = 'DEFEAT';
  box.appendChild(text);

  // .WinLostText
}

var Continue = () => {
  window.location.reload();
}

export {
  Winer,
  Loser,
  Continue
}
