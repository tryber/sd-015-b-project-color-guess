// Const
const colorText = document.getElementById('rgb-color');
let sixColors = generateNcolors(6);
const sixCircles = document.querySelectorAll('.ball');
const answerText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

// function to generate integer number in range [mín, máx]
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to generate random rgb
function generateRandomRGB() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return `(${r}, ${g}, ${b})`;
}

// function to generate n rgb random colors
function generateNcolors(n) {
  const aux = [];
  for (let i = 0; i < n; i += 1) {
    aux.push(generateRandomRGB());
  }
  return aux;
}

// functionn to generate circles in a circle path
function circlesInRadialPath() {
  const numberOfCircles = sixCircles.length;
  const side = 600;
  const R = 200;
  const pi = Math.PI;
  let angle = 0;
  for (let i = 0; i < numberOfCircles; i += 1) {
    sixCircles[i].setAttribute('cx', side / 2 + R * Math.sin(angle));
    sixCircles[i].setAttribute('cy', side / 2 - R * Math.cos(angle));
    sixCircles[i].setAttribute('fill', `rgb${sixColors[i]}`);
    angle += 2 * pi / numberOfCircles;
  }
}

// function to change colors of circles
function changeCirclesColors() {
  for (let i = 0; i < sixCircles.length; i += 1) {
    sixCircles[i].setAttribute('fill', `rgb${sixColors[i]}`);
  }
}

// function to change id of one circle to answerColor
function changeCircleId(color) {
  for (let i = 0; i < sixCircles.length; i += 1) {
    if (sixCircles[i].getAttribute('fill') === `rgb${color}`) {
      sixCircles[i].setAttribute('id', 'answerColor');
    }
  }
}

// generate circles in a circle path
circlesInRadialPath();

// function to verify if the target has id aswer
function isAnswer(eventoDeOrigem) {
  const element = eventoDeOrigem.target;
  if (element.id === 'answerColor') {
    answerText.innerText = 'Acertou!'
  } else {
    answerText.innerText = 'Errou! Tente novamente!'
  }
}

// function to addEventListener to sixCircles
function addEventToCircles() {
  for (let i = 0; i < sixCircles.length; i += 1) {
    sixCircles[i].addEventListener('click', isAnswer);
  }
}

// function to reset the game
function resetGame() {
  document.getElementById('answerColor').id = '';
  sixColors = generateNcolors(6);
  let numberForColor = randomNumber(0, 5);
  let colorToFind = sixColors[numberForColor];
  colorText.innerText = colorToFind;
  changeCirclesColors();
  changeCircleId(colorToFind);
}

// addEventListener to button resetGame
resetButton.addEventListener('click', resetGame);

window.onload = () => {
  let numberForColor = randomNumber(0, 5);
  let colorToFind = sixColors[numberForColor];
  colorText.innerText = colorToFind;

  changeCircleId(colorToFind);

  answerText.innerText = 'Escolha uma cor';
  addEventToCircles();
}