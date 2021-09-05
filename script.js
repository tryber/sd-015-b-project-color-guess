let gameColors = [];
let colorToBeGuess = '';
let score = 0;
const initialMessage = 'Escolha uma cor';
const scoreDisplay = document.getElementById('score');
const rgbColorDisplay = document.getElementById('rgb-color');
const answerDisplay = document.getElementById('answer');
const resetGameButton = document.getElementById('reset-game');

// Gera um número aleatório entre 1 e 255 para o RGB
const generateRandomNumber = () => {
  return Math.floor(Math.random() * (255 - 1) + 1);
};

// Gera uma cor aleatória em RGB
const generateRandomRGB = () => {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
};

// Usuário adivinha cor
const selectColor = (e) => {
  const colorGuess = e.target.style.backgroundColor;
  console.log(colorGuess);
  console.log(colorToBeGuess);
  if (colorToBeGuess === colorGuess) {
    answerDisplay.innerText = 'Acertou!';
    score += 3;
    scoreDisplay.innerText = `Pontuação: ${score}`
  } else {
    answerDisplay.innerText = 'Errou! Tente novamente';
  }
};

// Cria um círculo de seleção de cor
const createColorSelector = () => {
  const randomColor = generateRandomRGB();
  gameColors.push(randomColor);
  const color = document.createElement('div');
  color.style.backgroundColor = randomColor;
  color.className = 'ball';
  color.addEventListener('click', selectColor);
  return color;
};

// Insere os seletores de cores na tela
const insertColors = () => {
  const colorSelector = document.getElementById('color-selector');
  colorSelector.innerHTML = '';
  gameColors = [];
  for (let i = 0; i < 6; i += 1) {
    colorSelector.appendChild(createColorSelector());
  }
};

// Seleciona uma cor aleatória para ser adivinhada
const pickGameColor = () => {
  const randomPosition = Math.floor(Math.random() * 6);
  const selectedColor = gameColors[randomPosition];
  rgbColorDisplay.innerText = selectedColor;
  colorToBeGuess = selectedColor;
};

// Inicia/Reinicia o jogo
const startGame = () => {
  answerDisplay.innerText = initialMessage;
  insertColors();
  pickGameColor();
};

window.onload = () => {
  resetGameButton.addEventListener('click', startGame);
  startGame();
};
