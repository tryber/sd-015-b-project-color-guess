function geraNumeros() {
  const gera1Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera2Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera3Termo = Math.floor(Math.random() * (255 - 0) - 0);
  return `rgb(${gera1Termo}, ${gera2Termo}, ${gera3Termo})`;
}
const resposta = document.getElementById('answer');
const rgbPadrao = document.getElementById('rgb-color');
rgbPadrao.innerText = `${geraNumeros()}`;

function averiguaCor(event) {
  if (event.target.style.backgroundColor === rgbPadrao.innerText) {
    resposta.innerText = 'Acertou!';
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}

function adicionaBotao(event) {
  event.target.addEventListener('click', averiguaCor);
}

const balls = document.querySelectorAll('.ball');
function geraBolas() {
  balls.forEach((element) => {
    element.style.backgroundColor = geraNumeros();
    element.addEventListener('click', averiguaCor);
  });
}
geraBolas();

function gerarCerto() {
  balls[Math.floor(Math.random() * (6 - 1) + 1)].style.backgroundColor = rgbPadrao.innerText;
}

gerarCerto();
