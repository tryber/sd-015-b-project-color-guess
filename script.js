// Gera um número aleatório entre 1 e 255 para o RGB.
const generateRandomNumber = () => {
  return Math.random() * (255 - 1) + 1;
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
  const color = document.createElement('div');
  color.className = 'ball';
  color.style.backgroundColor = generateRandomRGB();
  return color;
};

// Insere os seletores de cores na tela
const insertColors = () => {
  const colorSelector = document.getElementById('color-selector');
  for (let i = 0; i < 6; i += 1) {
    colorSelector.appendChild(createColorSelector());
  }
};

window.onload = () => {
  insertColors();
};
