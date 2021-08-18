// Const
const colorText = document.getElementById('rgb-color');
const sixColors = generateNcolors(6);
const sixCircles = document.querySelectorAll('.ball');
const answerText = document.getElementById('answer');

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

window.onload = () => {
  const numberForColor = randomNumber(0, 5);
  const colorToFind = sixColors[numberForColor];
  colorText.innerText = colorToFind;
  for (let i = 0; i < sixCircles.length; i += 1) {
    if (sixCircles[i].getAttribute('fill') === `rgb${colorToFind}`) {
      sixCircles[i].setAttribute('id', 'answerColor');
    } 
  }
  answerText.innerText = 'Escolha uma cor';
  addEventToCircles();
}