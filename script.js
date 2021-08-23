const showRGB = document.getElementById('rgb-color');

function randomRGB() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const r = Math.round(red);
  const g = Math.round(green);
  const b = Math.round(blue);

  const rgb = `RGB: (${r}, ${g}, ${b})`;

  showRGB.innerText = rgb;
}

randomRGB();
