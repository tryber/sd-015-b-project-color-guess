const myColor = document.getElementById('rgb-color');

function generateRandomNumber() {
  return Math.floor(Math.random() * 255).toString(10);
}

function generateRandomColor() {
  let randomColor = '(';
  for (let index = 0; index < 3; index += 1) {
    randomColor += generateRandomNumber();
    if (index < 2) {
      randomColor += ', ';
    }
  }
  randomColor += ')';
  myColor.innerText = randomColor;
}

window.onload = function onloadPage() {
  generateRandomColor();
};
