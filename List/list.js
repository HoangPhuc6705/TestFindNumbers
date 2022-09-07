const select = document.querySelectorAll('.select');
// Chế độ
const ModeList = [
  'Min to Max',
  'Max to Min',
  'Random',
  'Divisible',
  'Time keeper',
  'Survival',
]

// Thời gian
const TimeList = [
  1, 5, 10, 15, 30, 60
]

// Kích thước
const SizeList = [
  3, 4, 5, 6, 7, 8, 10
]

// Get Mode, Time and Size Value
var GetModeGame;
var GetTimeGame;
var GetSizeGame;


const ModeName = document.querySelectorAll('.name');
ModeName[0].innerHTML = ModeList[0];
ModeName[1].innerHTML = `${TimeList[3]} phút`;
ModeName[2].innerHTML = `${SizeList[2]} x ${SizeList[2]}`;
GetModeGame = ModeList[0];
GetTimeGame = TimeList[3];
GetSizeGame = SizeList[2];

const choose = document.querySelectorAll('.list');

choose[0].onclick = () => {
  ListFunction();
}
choose[1].onclick = () => {
  TimeFunction();
}
choose[2].onclick = () => {
  SizeFunction();
}

var ListFunction = () => {
  CreateBox('Chọn chế độ');
  for (let i = 0; i < ModeList.length; i++) {
    const modeGame = document.createElement('div');
    modeGame.innerHTML = ModeList[i];
    modeGame.onclick = () => {
      document.querySelector('.box-boxlist').style.animation = 'close 0.5s';
      document.querySelector('.box').style.animation = 'OpacityBackgroundRemove 0.5s';
      setTimeout(() => {
        document.querySelector('.box-boxlist').remove();
        document.querySelector('.box').remove();
      }, 500)
      ModeName[0].innerHTML = ModeList[i];
      GetModeGame = ModeList[i];
    }
    document.querySelector('.select-box').appendChild(modeGame);
  }
}
var TimeFunction = () => {
  CreateBox('Chọn thời gian');
  for (let i = 0; i < TimeList.length; i++) {
    const timer = document.createElement('div');
    timer.innerHTML = `${TimeList[i]} phút`;
    timer.onclick = () => {
      document.querySelector('.box-boxlist').style.animation = 'close 0.5s';
      document.querySelector('.box').style.animation = 'OpacityBackgroundRemove 0.5s';
      setTimeout(() => {
        document.querySelector('.box-boxlist').remove();
        document.querySelector('.box').remove();
      }, 500)
      ModeName[1].innerHTML = `${TimeList[i]} phút`;
      GetTimeGame = TimeList[i];
    }
    document.querySelector('.select-box').appendChild(timer);
  }
}
var SizeFunction = () => {
  CreateBox('Chọn kích thước');
  for (let i = 0; i < SizeList.length; i++) {
    const size = document.createElement('div');
    size.innerHTML = `${SizeList[i]} x ${SizeList[i]}`;
    size.onclick = () => {
      document.querySelector('.box-boxlist').style.animation = 'close 0.5s';
      document.querySelector('.box').style.animation = 'OpacityBackgroundRemove 0.5s';
      setTimeout(() => {
        document.querySelector('.box-boxlist').remove();
        document.querySelector('.box').remove();
      }, 500)
      ModeName[2].innerHTML = `${SizeList[i]} x ${SizeList[i]}`;
      GetSizeGame = SizeList[i];
    }
    document.querySelector('.select-box').appendChild(size);
  }
}

var CreateBox = (change) => {
  // nền đen mờ
  const box = document.createElement('div');
  box.className = 'box';
  box.style.animation = 'OpacityBackground 0.5s'
  document.body.appendChild(box);

  // Hộp thoại
  const boxList = document.createElement('div');
  boxList.className = 'box-boxlist';
  document.body.appendChild(boxList);
  boxList.style.animation = 'animate 0.5s';

  // Tiêu đề
  const changeInput = document.createElement('h2');
  changeInput.className = 'change-title';
  changeInput.innerHTML = change;
  boxList.appendChild(changeInput);

  // Bảng chọn
  const selectBox = document.createElement('div');
  selectBox.className = 'select-box';
  boxList.appendChild(selectBox);

  // Thoát
  document.querySelector('.box').onclick = () => {
    boxList.style.animation = 'close 0.5s';
    box.style.animation = 'OpacityBackgroundRemove 0.5s'
    setTimeout(() => {
      box.remove();
      boxList.remove();
    }, 500);
  }
}

// Export
export {
  GetModeGame,
  GetTimeGame,
  GetSizeGame,
  CreateBox,
  ListFunction,
  TimeFunction,
  SizeFunction
}