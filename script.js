const actualColors = [];
const balls = document.querySelectorAll('.ball');
const answerPrint = document.querySelector('#answer');
const scoreContainer = document.querySelector('#score');
let scoreValue = 0;
let rightAnswer = '';

function randomNumbers(max, min) {
  const random = Math.random() * (max - min) + min;
  return Math.round(random);
}

function generateRandomColors() {
  const red = randomNumbers(255, 0);
  const blue = randomNumbers(255, 0);
  const green = randomNumbers(255, 0);

  const rgbString = `rgb(${red}, ${blue}, ${green})`;
  return rgbString;
}

function chooseRightColor() {
  const random6 = randomNumbers(5, 0);
  const colorRgb = document.querySelector('#rgb-color');
  rightAnswer = actualColors[random6];
  colorRgb.innerText = rightAnswer;
}

function colorizeBalls() {
  for (let i = 0; i < balls.length; i += 1) {
    actualColors[i] = generateRandomColors();
    balls[i].style.backgroundColor = actualColors[i];
  }
  chooseRightColor();
}

function userChoice(event) {
  if (event.target.style.backgroundColor === rightAnswer) {
    scoreValue += 3;
    scoreContainer.innerText = scoreValue;
    answerPrint.innerText = 'Acertou!';
  } else {
    answerPrint.innerText = 'Errou! Tente novamente!';
  }
}

function resetGame() {
  answerPrint.innerText = 'Escolha uma cor';
  colorizeBalls();
}

function addEvents() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', userChoice);
  }

  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', resetGame);
}

colorizeBalls();
addEvents();
