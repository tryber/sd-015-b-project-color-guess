const showRGB = document.getElementById('rgb-color');
const level = 1;

function levelLimited(number) {
  let output = 0;

  if (number > 0 && number <= 255) {
    output = number;
  } else {
    output = Math.abs(number - 50);
  }

  return output;
}

function colorBall(r, g, b) {
  const ball = document.querySelectorAll('.ball');

  for (let index = 0; index < ball.length; index += 1) {
    const red = r * index + level;
    const green = g * index + level;
    const blue = b * index + level;

    const colorBallRGB = `(${levelLimited(red)}, ${levelLimited(green)}, ${levelLimited(blue)})`;
    ball[index].style.backgroundColor = `rgb${colorBallRGB}`;
  }
}

function randomRGB() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const r = Math.round(red);
  const g = Math.round(green);
  const b = Math.round(blue);

  const rgb = `(${r}, ${g}, ${b})`;

  showRGB.innerText = rgb;
  colorBall(r, g, b);
}

function addBall(number) {
  const divBalls = document.getElementById('div-balls');

  for (let index = 0; index < number; index += 1) {
    const ball = document.createElement('div');

    ball.className = 'ball';
    ball.innerText = ' ';
    divBalls.appendChild(ball);
  }
}

window.onload = function start() {
  addBall(6);
  randomRGB();
};
