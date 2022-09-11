document.querySelector('.info').onclick = () => {
  const info = document.createElement('div');
  info.className = 'info-box';
  info.style.animation = 'OpacityBackground 0.5s';
  document.body.appendChild(info);
  info.onclick = () => {
    textinfo.style.animation = 'close 0.5s';
    info.style.animation = 'OpacityBackgroundRemove 0.5s';
    setTimeout(() => {
      info.remove();
      textinfo.remove();
    }, 500)
  }

  const textinfo = document.createElement('div');
  textinfo.className = 'text-info';
  document.body.appendChild(textinfo);
  textinfo.innerHTML = 'Copyright by FMACK - Hoang Phuc</br>Bạn đang chơi bản thử nghiệm Find Numbers 8.1.0'
  textinfo.style.animation = 'animateChoose 0.5s'

  // <ion-icon name="close-circle-outline"></ion-icon>
  const exit = document.createElement('ion-icon');
  exit.name = 'close-circle-outline';
  textinfo.appendChild(exit);

  document.querySelector('.text-info ion-icon').onclick = () => {
    textinfo.style.animation = 'close 0.5s';
    info.style.animation = 'OpacityBackgroundRemove 0.5s';
    setTimeout(() => {
      info.remove();
      textinfo.remove();
    }, 500)
  }
}