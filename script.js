function numberRandom() {
  const number = Math.floor(Math.random() * 256);
  return number;
}

function colorRgb() {
  const red = numberRandom();
  const green = numberRandom();
  const blue = numberRandom();
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function createTextRgb() {
  const p = document.getElementById('rgb-color');
  p.innerText = colorRgb().replace('rgb', '');
}

createTextRgb();
