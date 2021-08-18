function geraCor() {
  const elementosAColorir = document.getElementsByClassName('cor');
  for (let index = 0; index < elementosAColorir.length; index +=1) {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    elementosAColorir[index].style.backgroundColor = randomColor;
  }
}
geraCor();

function selecionaElemento() {
  // Captura elementos de Cores para pegar seu tamanho
  const elementosColoridos = document.getElementsByClassName('cor');
  // Captura div onde o Texto com o RGB será colocado
  const elementoDiv = document.getElementById('rgb-color');
  // Seleciona um número aleatório entre '0' & 'elementosColoridos.lenght'
  const randomElement = Math.floor(Math.random() * elementosColoridos.length);
  const valorRGB = elementosColoridos[randomElement].style.backgroundColor;
  elementoDiv.innerText = valorRGB;
  // console.log(randomElement); // [DEBUG]

}
selecionaElemento();