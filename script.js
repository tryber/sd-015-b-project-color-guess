const showRGB = document.getElementById('rgb-color');
const level = 100;
const divBalls = document.getElementById('div-balls');
const answer = document.getElementById('answer');
const buttonResetColors = document.getElementById('reset-game');
let score = 0;

function scoreShow() {
  const showScore = document.getElementById('score');

  showScore.innerText = score;
}

function levelLimited(number) {
  let output = 0;

  if (number > 0 && number <= 255) {
    output = number;
  } else {
    const newNumberRandom = Math.random() * 255;
    const newNumber = Math.round(newNumberRandom);
    output = newNumber;
  }

  return output;
}

function colorBall(r, g, b) {
  const ball = document.querySelectorAll('.ball');
  const correct = Math.random(1) * ball.length;
  const correctBall = Math.round(correct);

  for (let index = 0; index < ball.length; index += 1) {
    const redMath = r * (index + level);
    const red = redMath / 2;
    const greenMath = g * (index + level);
    const green = greenMath / 2;
    const blueMath = b * (index + level);
    const blue = blueMath / 2;

    const colorBallRGB = `(${levelLimited(red)}, ${levelLimited(green)}, ${levelLimited(blue)})`;
    ball[index].style.backgroundColor = `rgb${colorBallRGB}`;
  }

  ball[correctBall].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function randomRGB() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const r = Math.round(red);
  const g = Math.round(green);
  const b = Math.round(blue);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  showRGB.innerText = rgb;
  colorBall(r, g, b);
}

function addBall(number) {
  for (let index = 0; index < number; index += 1) {
    const ball = document.createElement('div');

    ball.className = 'ball';
    ball.innerText = ' ';
    divBalls.appendChild(ball);
  }
}

addBall(6);

function selectBallMSG(ball) {
  if (ball.style.backgroundColor === showRGB.innerText) {
    answer.innerText = 'Acertou!';
    score += 3;
    scoreShow();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
function selectBall(evento) {
  const ball = document.querySelectorAll('.ball');

  for (let index = 0; index < ball.length; index += 1) {
    if (evento.target === ball[index]) {
      selectBallMSG(ball[index]);
    }
  }
}

divBalls.addEventListener('click', selectBall);

function startGame() {
  randomRGB();
  answer.innerText = 'Escolha uma cor';
}

buttonResetColors.addEventListener('click', startGame);

window.onload = function start() {
  randomRGB();
};
