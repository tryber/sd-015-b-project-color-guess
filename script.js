const guesses = document.querySelectorAll('.ball');

function generateRandomColor() {
  const values = '0123456789ABCDEF';
  let randomColor = '#';
  for (let i = 0; i < 6; i += 1) {
    randomColor += values[Math.floor(Math.random() * 16)];
  }
  console.log(randomColor);
  return randomColor;
}

const randomBall = Math.floor(Math.random() * 6);

guesses[randomBall].style.background = 'rgb(168, 34, 1)';

for (let i = 0; i < guesses.length; i += 1) {
  if (guesses[i].style.background !== 'rgb(168, 34, 1)') {
    guesses[i].style.background = generateRandomColor();
  }
}
