// const TheLoadingbox = document.createElement('div');
// TheLoadingbox.className = 'loading';
// document.body.appendChild(TheLoadingbox);

// const TheLoadingbox2 = document.createElement('div');
// TheLoadingbox2.className = 'loading2';
// TheLoadingbox.appendChild(TheLoadingbox2);

// const TheLoadingbox3 = document.createElement('div');
// TheLoadingbox3.className = 'loading3';
// TheLoadingbox2.appendChild(TheLoadingbox3);

// for (let i = 0; i < 3; i++) {
//   const loadingBox = document.createElement('div');
//   TheLoadingbox3.appendChild(loadingBox);
// }

// const motto = document.createElement('p');
// TheLoadingbox2.appendChild(motto);

var MottoText = [
  `Đợi xíu đi...`
]

var Intro = () => {
  const TheLoadingbox = document.createElement('div');
  TheLoadingbox.className = 'loading';
  document.body.appendChild(TheLoadingbox);

  const TheLoadingbox2 = document.createElement('div');
  TheLoadingbox2.className = 'loading2';
  TheLoadingbox.appendChild(TheLoadingbox2);

  const TheLoadingbox3 = document.createElement('div');
  TheLoadingbox3.className = 'loading3';
  TheLoadingbox2.appendChild(TheLoadingbox3);

  for (let i = 0; i < 3; i++) {
    const loadingBox = document.createElement('div');
    TheLoadingbox3.appendChild(loadingBox);
  }

  const motto = document.createElement('p');
  TheLoadingbox2.appendChild(motto);



  motto.innerHTML = MottoText[Math.floor(Math.random() * MottoText.length)];
  // motto.innerHTML = MottoText[MottoText.length-1];
  setTimeout(() => {
    TheLoadingbox.style.animation = 'opacity 0.5s';
    document.querySelector('.background').style.display = 'flex'
    document.querySelector('.title').style.display = 'block'
    document.querySelector('.choose').style.display = 'flex'
    setTimeout(() => {
      TheLoadingbox.remove();
    }, 500);
  }, 4000);
}

export { Intro };
