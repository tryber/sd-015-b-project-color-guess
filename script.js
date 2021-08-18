
// create colors
function randomNumberGenerator(limit) {
  const number = (Math.random() * limit);
  const roundNumber = Math.round(number);
  return roundNumber;
}

function colorGuessVerify(event) {
  const gameColorElement = document.getElementById("rgb-color");
  const div = event.target;
  const result = document.getElementById("answer");
  const divColor = div.style.backgroundColor;
  const gameColor = "rgb" + gameColorElement.innerText;
  if (divColor === gameColor) {
    result.innerText = "Acertou!";
  } else {
    result.innerText = "Errou! Tente novamente!";
  }
}

function createColor() {
  const number1 = randomNumberGenerator(255);
  const number2 = randomNumberGenerator(255);
  const number3 = randomNumberGenerator(255);
  return `rgb(${number1}, ${number2}, ${number3})`;
}

function createColorDiv(color) {
  const colorsContainer = document.querySelector(".divs-center");
  const div = document.createElement("div");
  div.className = "ball";
  div.style.backgroundColor = color;
  colorsContainer.appendChild(div)
  div.addEventListener("click", colorGuessVerify);
}

function createNColorDivs(divNumbers) {
  for (let index = 0; index < divNumbers; index += 1) {
    createColorDiv(createColor())
  }
}

function createAllColorDivs() {
  const divNumbers = 6
  createColorDiv("rgb(168, 34, 1)")
  createNColorDivs(divNumbers - 1);  
  const colorsContainer = document.querySelector(".divs-center");
  colorsContainer.style.width = (60 * divNumbers) + "px" // 60 = div width + margin
}

window.onload = function () {
  createAllColorDivs()
}