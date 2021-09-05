const gameColors = [];
const rgbColorDiv = document.getElementById('rgb-color');
// Gera um número aleatório entre 1 e 255 para o RGB.
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (255 - 1) + 1);
}

// Gera uma cor aleatória em RGB.
const generateRandomRGB = () => {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

// Cria um círculo de seleção de cor
const createColorSelector = () => {
  const randomColor = generateRandomRGB();
  gameColors.push(randomColor);
  const color = document.createElement('div');
  color.className = 'ball';
  color.style.backgroundColor = randomColor;
  return color;
};

// Insere os seletores de cores na tela
const insertColors = () => {
  const colorSelector = document.getElementById('color-selector');
  for (let i = 0; i < 6; i += 1) {
    colorSelector.appendChild(createColorSelector());
  }
};

// Seleciona uma cor aleatória para ser adivinhada
const PickGameColor = () => {
  const randomPosition = Math.floor(Math.random() * 6);
  const selectedColor = gameColors[randomPosition];
  rgbColorDiv.innerText = selectedColor;
}

window.onload = () => {
  insertColors();
  PickGameColor();
};
