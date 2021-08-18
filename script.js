// Const
const colorText = document.getElementById('rgb-color');
const sixColors = generateNcolors(6);

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

window.onload = () => {
  const numberForColor = randomNumber(0, 6);
  const colorToFind = sixColors[numberForColor];
  colorText.innerText = colorToFind;
}