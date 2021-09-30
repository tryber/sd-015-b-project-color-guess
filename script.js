function randomNumbers () {
  const max = 255;
  const min = 0;
  const random = Math.random() * (max - min) + min;
  return Math.round(random);
}

function generateRandomColors () {
  const red = randomNumbers();
  const blue = randomNumbers();
  const green = randomNumbers();

  const rgbString = `rgb(${red}, ${blue}, ${green})`;
  return rgbString;
}

function colorizeBalls () {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColors();
  }
}

window.onload = colorizeBalls();