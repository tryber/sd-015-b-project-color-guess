// Gera cores aleatórias em RGB
// Obtida do usuário adeneo em
// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function randomRgb() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;

  let cor1 = o(r() * s) + 1;
  let cor2 = o(r() * s) + 1;
  let cor3 = o(r() * s) + 1;

  if ((cor1 === 255) && (cor2 === 255) && (cor3 === 255)) {
    cor1 = o(r() * (s - 1));
    cor2 = o(r() * (s - 1));
    cor3 = o(r() * (s - 1));
  }

  return `rgb(${cor1}, ${cor2}, ${cor3})`;
}

// Gera número inteiro aleatório
// De https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(max) {
  const maximo = Math.floor(max);
  return Math.floor(Math.random() * (maximo + 1));
}

function createTextRGB() {
  const textRGB = document.getElementById('rgb-color');
  textRGB.innerText = randomRgb();
  return textRGB.innerText;
}

function createColorsinCircleandText() {
  const allCircles = document.getElementsByClassName('ball');
  const textColor = createTextRGB();
  for (let i = 0; i < allCircles.length; i += 1) {
    allCircles[i].style.backgroundColor = randomRgb();
  }
  const pos = getRandomIntInclusive(allCircles.length - 1);
  allCircles[pos].style.backgroundColor = textColor;
}

function updateScore() {
  const score = document.getElementById('score');
  const actualScore = parseInt(score.innerText, 10);
  const points = 3;
  const newScore = actualScore + points;

  score.innerText = newScore;
}
function createGameDynamics() {
  const pickedColor = this.style.backgroundColor;
  const textColor = document.getElementById('rgb-color').innerText;
  const textWinLose = document.getElementById('answer');

  if (pickedColor === textColor) {
    textWinLose.innerText = 'Acertou!';
    updateScore();
  } else {
    textWinLose.innerText = 'Errou! Tente novamente';
  }
}

function initializeGameDynamics() {
  const colorCircles = document.querySelectorAll('.ball');

  colorCircles.forEach((Element) => {
    Element.addEventListener('click', createGameDynamics);
  });
}

function resetGame() {
  const textWinLose = document.getElementById('answer');
  textWinLose.innerText = 'Escolha uma cor';
  createColorsinCircleandText();
}

function resetButton() {
  const reset = document.getElementById('reset-game');
  reset.addEventListener('click', resetGame);
}

window.onload = () => {
  createColorsinCircleandText();
  initializeGameDynamics();
  resetButton();
};
