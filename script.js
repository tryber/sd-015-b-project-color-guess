// Gera um número aleatório entre 1 e 255 para o RGB.
function generateRandomNumber() {
  return Math.random() * (255 - 1) + 1;
}

// Gera uma cor aleatória em RGB.
function generateRandomRGB() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

const createColor = () => {
  const color = document.createElement('div');
  color.className = 'ball';
  color.style.backgroundColor = generateRandomRGB();
  return color;
};

const insertColors = () => {
  const colorSelector = document.getElementById('color-selector');
  for (let i = 0; i < 6; i += 1) {
    colorSelector.appendChild(createColor());
  }
};

window.onload = () => {
  insertColors();
};
