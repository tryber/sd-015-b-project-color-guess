let R = 0;
let G = 0;
let B = 0;
const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');
const containerBalls = document.getElementById('container-balls');
const answer = document.getElementById('answer');

for (let index = 0; index < balls.length; index += 1) {
  generateRandomColor();
  balls[index].style.backgroundColor = `rgb(${R},${G},${B})`;
}
const drawnColor = balls[Math.floor(Math.random() * balls.length)].style.backgroundColor;
rgbColor.innerText = drawnColor;

containerBalls.addEventListener('click', checkResult);

function generateRandomColor() {
  R = Math.floor(Math.random() * 256);
  G = Math.floor(Math.random() * 256);
  B = Math.floor(Math.random() * 256);
}

function checkResult(event) {
  if (event.target.style.backgroundColor === drawnColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
