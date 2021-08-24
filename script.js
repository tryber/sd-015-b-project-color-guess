const myColor = document.getElementById('rgb-color');
const myBall = document.getElementsByClassName('ball');

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
  return randomColor;
}

function chosenColor() {
  myColor.innerText = generateRandomColor();
}

function paintBalls() {
  for (let index = 0; index < myBall.length; index += 1) {
    let color = 'rgb';
    color += generateRandomColor();
    myBall[index].style.backgroundColor = color;
  }
}

window.onload = function onloadPage() {
  chosenColor();
  paintBalls();
};
