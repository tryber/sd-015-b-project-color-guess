const balls = [...document.getElementsByClassName('ball')];
const p = document.getElementById('rgb-color');
const h2 = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');

function numberRandom(value) {
  const number = Math.floor(Math.random() * (value + 1));
  return number;
}

function colorRgb() {
  const red = numberRandom(255);
  const green = numberRandom(255);
  const blue = numberRandom(255);
  const rgb = `(${red}, ${green}, ${blue})`;
  return rgb;
}

function createTextRgb() {
  p.innerText = colorRgb();
}

function colorBalls() {
  balls.forEach((b) => {
    const ball = b;
    ball.style.backgroundColor = `rgb${colorRgb()}`;
  });
}

function createBallWinner() {
  const winningNumber = numberRandom(5);
  const textColor = p.innerText;
  balls[winningNumber].style.backgroundColor = `rgb${textColor}`;
}

function verifyWinner(event) {
  const targetBall = event.target;
  if (targetBall.style.backgroundColor === `rgb${p.innerText}`) {
    h2.innerText = 'Acertou!';
  } else {
    h2.innerText = 'Errou! Tente novamente!';
  }
}

function ballsThatListen() {
  balls.forEach((b) => {
    const ball = b;
    ball.addEventListener('click', verifyWinner);
  });
}

function newColors() {
  h2.innerText = 'Escolha uma cor';
  createTextRgb();
  colorBalls();
  createBallWinner();
  ballsThatListen();
}

createTextRgb();
colorBalls();
createBallWinner();
ballsThatListen();
btnReset.addEventListener('click', newColors);
