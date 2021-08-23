const guesses = document.querySelectorAll('.ball');
const answerText = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const answerTextDisplay = document.getElementById('color');
const counter = document.getElementById('score');

let answer = '';

function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function generateGame() {
  for (let i = 0; i < guesses.length; i += 1) {
    guesses[i].style.background = generateRandomColor();
  }
  answer = generateRandomColor();
  const randomBall = Math.floor(Math.random() * 6);
  guesses[randomBall].style.background = answer;
  answerTextDisplay.innerText = `Que cor é essa: ${answer}`;
}

generateGame();

let points = 0;

function selectBall(event) {
  const clickedBall = event.target;
  const previousBall = document.getElementsByClassName('selected');
  if (previousBall.length === 0) {
    clickedBall.classList.add('selected');
  } else {
    previousBall[0].classList.remove('selected');
    clickedBall.classList.add('selected');
  }
}

function checkGuess(event) {
  const guessBackground = event.target.style.background;
  if (guessBackground === answer) {
    answerText.innerText = 'Acertou!';
    points += 3;
    counter.innerText = points;
    for (let i = 0; i < guesses.length; i += 1) {
      guesses[i].removeEventListener('click', selectBall);
      guesses[i].removeEventListener('click', checkGuess);
    }
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < guesses.length; i += 1) {
  guesses[i].addEventListener('click', selectBall);
  guesses[i].addEventListener('click', checkGuess);
}

function resetGame() {
  generateGame();
  answerText.innerText = 'Escolha uma cor';
  for (let i = 0; i < guesses.length; i += 1) {
    guesses[i].addEventListener('click', selectBall);
    guesses[i].addEventListener('click', checkGuess);
  }
  const previousBall = document.getElementsByClassName('selected');
  if (previousBall.length !== 0) {
    previousBall[0].classList.remove('selected');
  }
}

resetBtn.addEventListener('click', resetGame);
