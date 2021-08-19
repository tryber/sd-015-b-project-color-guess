// Const
const colorText = document.getElementById('rgb-color');
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
function circlesInRadialPath(colors) {
  for (let i = 0; i < sixCircles.length; i += 1) {
    sixCircles[i].style.backgroundColor = `rgb${colors[i]}`;
  }
}

// function to change colors of circles
function changeCirclesColors() {
  for (let i = 0; i < sixCircles.length; i += 1) {
    sixCircles[i].style.backgroundColor = `rgb${sixColors[i]}`;
  }
}

// function to change id of one circle to answerColor
function changeCircleId(color) {
  for (let i = 0; i < sixCircles.length; i += 1) {
    if (sixCircles[i].style.backgroundColor === `rgb${color}`) {
      sixCircles[i].id = 'answerColor';
    }
  }
}

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
  answerText.innerText = 'Escolha uma cor';
  changeCirclesColors();
  changeCircleId(colorToFind);
}

// addEventListener to button resetGame
resetButton.addEventListener('click', resetGame);

window.onload = () => {
  let sixColors = generateNcolors(6);

  circlesInRadialPath(sixColors);
  addEventToCircles();

  let numberForColor = randomNumber(0, 5);
  let colorToFind = sixColors[numberForColor];
  colorText.innerText = colorToFind;

  changeCircleId(colorToFind);

  answerText.innerText = 'Escolha uma cor';
}