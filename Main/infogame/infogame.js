var setting_info = () => {
  const box = document.createElement('div');
  box.className = 'setting-info';
  document.body.appendChild(box)

  const infogame = document.createElement('ion-icon');
  infogame.name = 'reorder-three-outline';
  const settinggame = document.createElement('ion-icon');
  settinggame.name = 'settings-outline';
  box.appendChild(infogame);
  box.appendChild(settinggame);

}
/* <ion-icon name="menu-outline"></ion-icon> */
/* <ion-icon name="settings-outline"></ion-icon> */

export default setting_info;