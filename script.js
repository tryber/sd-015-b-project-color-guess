const coresContainer = document.querySelector('.cores-container');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let color = '';
let scoreNum = 0;

const scoreBoard = () => {
  scoreNum += 3;
  return scoreNum;
};
coresContainer.addEventListener('click', (e) => {
  const el = e.target;
  if (el.style.backgroundColor === `rgb${color}`) {
    answer.innerHTML = 'Acertou!';
    score.innerHTML = scoreBoard();
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
});

const rgbDollynho = () => {
  const regex = /\d+/g;
  const rgb = color.match(regex);
  color = color.slice(3);
  rgbColor.innerHTML = color;
  rgbColor.style.color = `rgb${color}`;
  if (rgb[0] >= 220 && rgb[1] >= 220 && rgb[2] >= 220) {
    rgbColor.style.backgroundColor = 'black';
  }
};

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const randomColorIndex = () => Math.floor(Math.random() * 6 + 1);

const createDiv = () => {
  const div = document.createElement('div');
  return div;
};

const createColor = () => {
  const corIndex = randomColorIndex();
  console.log(corIndex);
  for (let i = 1; i <= 6; i += 1) {
    const div = createDiv();
    div.classList.add('ball');
    div.style.backgroundColor = generateRandomColor();
    if (corIndex === i) color = div.style.backgroundColor;
    coresContainer.appendChild(div);
  }
};

const eraseColors = () => {
  const { children } = coresContainer;
  Array.from(children).forEach((element) => {
    element.remove();
  });
};

resetGame.addEventListener('click', () => {
  answer.innerHTML = 'Escolha uma cor';
  eraseColors();
  createColor();
  rgbDollynho();
});

window.onload = () => {
  createColor();
  rgbDollynho();
};
