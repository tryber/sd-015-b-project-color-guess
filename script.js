const guesses = document.querySelectorAll('.ball');
const answerText = document.getElementById('answer');
const randomBall = Math.floor(Math.random() * 6);
const answer = 'rgb(168, 34, 1)';

function generateRandomColor() {
  const values = '0123456789ABCDEF';
  let randomColor = '#';
  for (let i = 0; i < 6; i += 1) {
    randomColor += values[Math.floor(Math.random() * 16)];
  }
  console.log(randomColor);
  return randomColor;
}

guesses[randomBall].style.background = answer;

for (let i = 0; i < guesses.length; i += 1) {
  if (guesses[i].style.background !== 'rgb(168, 34, 1)') {
    guesses[i].style.background = generateRandomColor();
  }
}

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
