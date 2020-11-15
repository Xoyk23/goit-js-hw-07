const refs = {
  input: document.querySelector('#controls input'),
  buttonRender: document.querySelector('button[data-action="render"]'),
  buttonDestroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

let inputValue = '';

const getValue = () => (inputValue = refs.input.valueAsNumber);
const randRgb = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    refs.boxes.insertAdjacentHTML('beforeend', `<div>${i + 1}</div>`);
  }
  const divStyle = document.querySelectorAll('#boxes div');

  divStyle.forEach((item, i) => {
    item.style.backgroundColor = randRgb();
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
  });
};

// const destroyBoxes = () => {
//   const divDestroy = document.querySelectorAll('#boxes div');
//   divDestroy.forEach(item => item.remove());
// };

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.buttonRender.addEventListener('click', () => {
  getValue();
  createBoxes(inputValue);
});

refs.buttonDestroy.addEventListener('click', () => destroyBoxes());
