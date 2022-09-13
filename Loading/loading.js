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
  `Yêu cùng lớp là mối tình tuyệt vời nhất...`,
  `"Đối với tao, mày là bạn thân !"`,
  `Miệng thì nói vậy thôi</br>Chứ nhìn em vui vẻ bên người khác nghĩ sao không buồn`,
  `Si tình cùng một lúc nhiều người gọi là gì ?</br>Siđa`,
  `Đôi khi người chúng ta thích, không thích ta`,
  `Boi hai mái, đi đái cũng nhớ em`,
  `Ngọt ngào đến mấy cũng tan thành mây`,
  `Càng yêu nhau lâu, người ta càng hiểu nhau sâu</br>
  Càng hiểu nhau sâu, càng dễ làm nhau đau...`,
  `"Tôi yêu em như hoa yêu lá</br>
  Nhưng tiết là như bỉ ngạn hoa</br>
  Ngàn năm lá đợi hoa không nở</br>
  Ngàn năm hoa nở lá không về..."`,
  `"Sau cùng thì em vẫn thuộc về người đó..."`,
  `Khi họ gặp được người tốt hơn</br>Họ sẽ lãng quên bạn !`,
  `"Tình tan, duyên tàn"`,
  `Tình đẹp đến mấy cũng đến lúc tàn thôi`,
  `"Khi ta còn trẻ, người ta có thể dễ dàng từ bỏ một mối tình.</br>Nhưng người ta đâu biết rằng, những gì ta mong muốn và cần nhất chỉ đến một lần trong đời "`,
  `"Cậu bảo vệ thế giới</br>Tôi bảo vệ cậu"`,
  `Thế giới này thật tàn nhẫn</br>Nhưng tôi vẫn yêu em`
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