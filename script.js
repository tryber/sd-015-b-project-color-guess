function geraNumeros() {
  const gera1Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera2Termo = Math.floor(Math.random() * (255 - 0) - 0);
  const gera3Termo = Math.floor(Math.random() * (255 - 0) - 0);
  return `rgb(${gera1Termo}, ${gera2Termo}, ${gera3Termo})`;
}

console.log(geraNumeros());

const rgbPadrao = document.getElementById('rgb-color');
rgbPadrao.innerText = `${geraNumeros()}`;
const balls = document.querySelectorAll('.ball');
function geraBolas() {
  balls.forEach((element) => {
    element.style.backgroundColor = geraNumeros();
  });
}
geraBolas();
