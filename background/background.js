const background = document.querySelector('.background');

const clock = document.createElement('div');
clock.classList.add('clock');
background.appendChild(clock);

const insideClock = document.createElement('div');
clock.appendChild(insideClock);
insideClock.classList.add('insideclock')

const matrix = document.createElement('div');
background.appendChild(matrix);