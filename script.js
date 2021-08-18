function geraCor() {
  const elementosAColorir = document.getElementsByClassName('cor');
  for (let index = 0; index < elementosAColorir.length; index +=1) {
    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    elementosAColorir[index].style.backgroundColor = randomColor;
  }
}
// geraCor();