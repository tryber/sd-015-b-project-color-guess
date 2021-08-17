const balls = Array.from(document.getElementsByClassName('ball'));

window.onload = function initialize() {
  function randomizeColors() {
    const firstRandomNumber = Math.floor(Math.random() * 255);
    const secondRandomNumber = Math.floor(Math.random() * 255);
    const thirdRandomNumber = Math.floor(Math.random() * 255);
    const randomArray = [firstRandomNumber, secondRandomNumber, thirdRandomNumber];
    return randomArray;
  }
  for (let counter = 0; counter < balls.length; counter += 1) {
    const newColor = randomizeColors();
    balls[counter].style.background = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]}`;
  }
}

