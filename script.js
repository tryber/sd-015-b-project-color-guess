const balls = Array.from(document.getElementsByClassName('ball'));
const rgbColor = document.getElementById('rgb-color');
let allColors = [];
const answer = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');
let newScore = 0;

// creates one random color, returns rgb as array
function randomizeColors() {
  const firstRandomNumber = Math.floor(Math.random() * 255);
  const secondRandomNumber = Math.floor(Math.random() * 255);
  const thirdRandomNumber = Math.floor(Math.random() * 255);
  const randomArray = [firstRandomNumber, secondRandomNumber, thirdRandomNumber];
  return randomArray;
}

// creates challenge color from all 6 randomly created colors
function addChallengeColor() {
  const randomInt = Math.floor(Math.random() * 6);
  const challengeColor = allColors[randomInt];
  rgbColor.innerText = challengeColor;
}

// array for collecting each randomly created color in rgb format
function collectColors(color) {
  const colorFormat = `(${color[0]}, ${color[1]}, ${color[2]})`;
  allColors.push(colorFormat);
  if (allColors.length === 6) {
    addChallengeColor();
  }
}

// on start, create 6 random colors, select one color for guessing, remove any selected color from previous game
function initialize() {
  allColors = [];
  for (let counter = 0; counter < balls.length; counter += 1) {
    const newColor = randomizeColors();
    collectColors(newColor);
    balls[counter].style.background = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]}`;
    balls[counter].classList.remove('selected');
  }
  answer.innerText = 'Escolha uma cor';
}

window.onload = initialize;

function changeScore(userResult) {
  if (userResult) {
    newScore += 3;
    score.innerText = `Placar: ${newScore}`;
  } else {
    newScore = 0;
    score.innerText = `Placar: ${newScore}`;
  }
}

// checks if selected ball's background color is equal to challenge color
function checkAnswer(ball) {
  const ballColor = ball.style.background;
  const challengeColor = `rgb${rgbColor.innerText}`;
  if (ballColor === challengeColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  changeScore(ballColor === challengeColor);
}

// clicking on a ball selects it and calls checkAnswer
function addSelected(originEvent) {
  const selectedBall = originEvent.target;
  for (let counter = 0; counter < balls.length; counter += 1) {
    if (balls[counter].classList.contains('selected')) {
      balls[counter].classList.remove('selected');
    } else if (balls[counter] === selectedBall) {
      selectedBall.classList.add('selected');
      checkAnswer(selectedBall);
    }
  }
}
for (let counter = 0; counter < balls.length; counter += 1) {
  balls[counter].addEventListener('click', addSelected);
}

function resetGame() {
  initialize();
}
resetButton.addEventListener('click', resetGame);
