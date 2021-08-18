
// create colors
function randomNumberGenerator(limit) {
  const number = (Math.random() * limit);
  const roundNumber = Math.round(number);
  return roundNumber;
}

function addScorePoints() {
  const scoreBoard = document.getElementById("score");
  let score = Number(scoreBoard.innerText)
  newScore = score + 3
  scoreBoard.innerText = newScore;
};

function colorGuessVerify(event) {
  const gameColorElement = document.getElementById("rgb-color");
  const div = event.target;
  const result = document.getElementById("answer");
  const divColor = div.style.backgroundColor;
  const gameColor = "rgb" + gameColorElement.innerText;
  if (divColor === gameColor) {
    result.innerText = "Acertou!";
    addScorePoints();
  } else {
    result.innerText = "Errou! Tente novamente!";
  }
}

function resetAnswerText () {
  const result = document.getElementById("answer");
  result.innerText = "Escolha uma cor";
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
    createColorDiv(createColor());
  }
}

function getNewColorList() {
  let colorList = [];
  const colorDivs = document.getElementsByClassName("ball");
  for (let colorDiv of colorDivs) {
    let color = colorDiv.style.backgroundColor.slice(3);
    colorList.push(color);
  }
  return colorList;
}

function sortNewColor() {
  let colorList = getNewColorList();
  const randomNumber = randomNumberGenerator(5);
  return colorList[randomNumber];
}

function setNewColor(newColor) {
  let awnserColor = document.getElementById("rgb-color");
  awnserColor.innerText = newColor;
}

function resetColorDivs() {
  const colorsContainer = document.querySelector(".divs-center");
  colorsContainer.innerHTML = "";
  createNColorDivs(6);
  let newColor = sortNewColor();
  setNewColor(newColor);
}

function resetGame() {
  resetColorDivs();
  resetAnswerText();
}

function createAllColorDivs() {
  const divNumbers = 6
  createColorDiv("rgb(168, 34, 1)")
  createNColorDivs(divNumbers - 1);  
  const colorsContainer = document.querySelector(".divs-center");
  colorsContainer.style.width = (60 * divNumbers) + "px" // 60 = div width + margin
}

function setButtonsEventListeners() {
  const resetButtom = document.getElementById("reset-game");
  resetButtom.addEventListener("click", resetGame);
}

window.onload = function () {
  createAllColorDivs();
  setButtonsEventListeners();
}