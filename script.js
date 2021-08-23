const guesses = document.querySelectorAll('.ball');
const answerText = document.getElementById('answer');
const randomBall = Math.floor(Math.random() * 6);
const resetBtn = document.getElementById('reset-game');
const answerTextDisplay = document.getElementById('color');
const resposta = document.getElementById('resposta');

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
  guesses[randomBall].style.background = answer;
  answerTextDisplay.innerText += answer;

  resposta.innerText += answer;
  resposta.style.background = answer;
}

generateGame();

function checkGuess(event) {
  const guess = event.target.style.background;
  if (guess === answer) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

for (let i = 0; i < guesses.length; i += 1) {
  guesses[i].addEventListener('click', checkGuess);
}

function resetGame() {
  generateGame();
  answerText.innerText = 'Escolha uma cor';
  const newAnser = generateRandomColor();
  answerTextDisplay.innerText = newAnser;
  resposta.innerText = newAnser;
  resposta.style.background = newAnser;
}

resetBtn.addEventListener('click', resetGame);
