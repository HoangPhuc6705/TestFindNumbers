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

var MottoText = [
  `Yêu cùng lớp là mối tình tuyệt vời nhất...`,
  `Đối với tớ, cậu là bạn thân !`,
  `Miệng thì nói vậy thôi</br>Chứ nhìn em vui vẻ bên người khác nghĩ sao không buồn`,
  `Chỉ là bạn...`,
  `Đôi khi người chúng ta thích, không thích ta`,
  `Boi hai mái, đi đái cũng nhớ em`,
  `Ngọt ngào đến mấy cũng tan thành mây`
]

var Intro = () => {
  motto.innerHTML = MottoText[Math.floor(Math.random() * MottoText.length)];
  setTimeout(() => {
    TheLoadingbox.style.animation = 'opacity 0.5s';
    setTimeout(() => {
      TheLoadingbox.remove();
    }, 500);
  }, 3000)
}

export {Intro};