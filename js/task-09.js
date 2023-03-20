const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');

function changeBgc() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

button.addEventListener('click', changeBgc);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
