function geraNumeros() {
  const gera1Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera2Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera3Termo = Math.floor(Math.random() * (255 - 0) - 0);
  return `rgb(${gera1Termo}, ${gera2Termo}, ${gera3Termo})`;
}
const resposta = document.getElementById('answer');
const placar = document.getElementById('score');
const reseta = document.getElementById('reset-game');
const rgbPadrao = document.getElementById('rgb-color');
rgbPadrao.innerText = `${geraNumeros()}`;

function averiguaCor(event) {
  if (event.target.style.backgroundColor === rgbPadrao.innerText) {
    resposta.innerText = 'Acertou!';
    const valorAtual = parseFloat(placar.innerText);
    placar.innerText = valorAtual + 3;
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}

const balls = document.querySelectorAll('.ball');

function criaBack(event) {
  const estilo = event;
  estilo.style.backgroundColor = geraNumeros();
}
function geraBolas() {
  balls.forEach((element) => criaBack(element));
  balls.forEach((element) => element.addEventListener('click', averiguaCor));
}
geraBolas();

function gerarCerto() {
  balls[Math.floor(Math.random() * (6 - 1) + 1)].style.backgroundColor = rgbPadrao.innerText;
}
function resetaGame() {
  rgbPadrao.innerText = `${geraNumeros()}`;
  geraBolas();
  gerarCerto();
  resposta.innerText = 'Escolha uma cor';
}
reseta.addEventListener('click', resetaGame);
gerarCerto();
