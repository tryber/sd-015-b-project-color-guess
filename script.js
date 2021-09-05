const createColor = () => {
  const color = document.createElement('div');
  color.className = 'ball';
  return color;
};

const insertColors = () => {
  const colorSelector = document.getElementById('color-selector');
  for (let i = 0; i < 6; i += 1) {
    colorSelector.appendChild(createColor());
  }
};

window.onload = () => {
  insertColors();
};
