function geraCor() {
  const elementosAColorir = document.getElementsByClassName('ball');
  for (let index = 0; index < elementosAColorir.length; index +=1) {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    elementosAColorir[index].style.backgroundColor = randomColor;
  }
}

function selecionaElemento() {
  // Captura elementos de Cores para pegar seu tamanho
  const elementosColoridos = document.getElementsByClassName('ball');
  // Captura div onde o Texto com o RGB será colocado
  const elementoDiv = document.getElementById('rgb-color');
  // Seleciona um número aleatório entre '0' & 'elementosColoridos.lenght'
  const randomElement = Math.floor(Math.random() * elementosColoridos.length);
  const valorRGB = elementosColoridos[randomElement].style.backgroundColor;
  elementoDiv.innerText = valorRGB;
  // console.log(randomElement); // [DEBUG]
}

// function placar(manipularPonto) {
//   const textoPlacar = document.getElementById('score');
//   console.log("FUNÇÃO PLACAR FOI CHAMADA");
//   console.log(manipularPonto);
//   textoPlacar.innerText += 3;
//   if (manipularPonto === 'adicionar') {
//     console.log("FUNÇÃO AUMENTAR PONTO, OK!!!");
//   } else if (manipularPonto === 'diminuir') {
//     console.log("FUNÇÃO DIMINUIR PONTO, OK!!!");
//     textoPlacar.innerText -= 1;
//   }
//   // console.log(textoPlacar.innerText); // [DEBUG]
// }

function addEventClick() {
    // Adiciona evento de clique na class ball quando a página é carregada
    const elementosColoridos = document.getElementsByClassName('ball');
    const elementoDiv = document.getElementById('rgb-color');
    const elementoResult = document.getElementById('answer');
    for (let index = 0; index < elementosColoridos.length; index +=1) {
        elementosColoridos[index].addEventListener('click', function () {
          // console.log('Função click foi adicionada ao elemento ' + index);
          // Ao clicar no elemento, roda função que compara se o texto dentro do rgb-color é igual ao backgroundColor do Elemento.
          const propriedadeDoElemento = event.target.style.backgroundColor;
          if (propriedadeDoElemento === elementoDiv.innerText) {
            // console.log('É IGUAL!!!'); // [DEBUG]
            elementoResult.innerHTML = 'Acertou!';
            // resetarJogo();
            var manipularPonto = 'adicionar';
            // placar(manipularPonto);
          } else {
            // console.log('NÃO É IGUAL!!!'); // [DEBUG]
            elementoResult.innerHTML = 'Errou! Tente novamente!';
            var manipularPonto = 'remover';
            // placar(manipularPonto);
          }
          // Deve-se incrementar 3 pontos a cada acerto no Placar, caso a cor seja acertada"
        });
    }
}
addEventClick();

function resetarJogo() {
  const elementoResult = document.getElementById('answer');
  elementoResult.innerHTML = 'Escolha uma cor';
  geraCor();
  selecionaElemento();
}
resetarJogo();

// Adiciona ação a botões:
const botaoDeReset = document.getElementById('reset-game');
botaoDeReset.addEventListener('click', function () {
    // Quando clicar no botão de Reset
    // Chama-se a função que troca de Cor.
    resetarJogo();

});