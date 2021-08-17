const balls = Array.from(document.getElementsByClassName('ball'));
const rgbColor = document.getElementById('rgb-color');
const allColors = [];

function randomizeColors() {
  const firstRandomNumber = Math.floor(Math.random() * 255);
  const secondRandomNumber = Math.floor(Math.random() * 255);
  const thirdRandomNumber = Math.floor(Math.random() * 255);
  const randomArray = [firstRandomNumber, secondRandomNumber, thirdRandomNumber];
  return randomArray;
}

function collectColors(color) {
  const colorFormat = `(${color[0]}, ${color[1]}, ${color[2]})`;
  allColors.push(colorFormat);
}

function addChallengeColor() {
  const randomInt = Math.floor(Math.random() * 6);
  const challengeColor = allColors[randomInt];
  rgbColor.innerText = challengeColor;
}

window.onload = function initialize() {
  for (let counter = 0; counter < balls.length; counter += 1) {
    const newColor = randomizeColors();
    collectColors(newColor);
    balls[counter].style.background = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]}`;
  }
  addChallengeColor();
};
