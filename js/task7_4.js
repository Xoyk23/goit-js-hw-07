/*
Счетчик состоит из спана и кнопок, 
которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

*/

// 1.Создадим обьект для удобства работы с кнопками и интерфейсом
const references = {
  valueCounterRef: document.querySelector('#value'),
  btnIncrementRef: document.querySelector('button[data-action="increment"]'),
  btnDecrementRef: document.querySelector('button[data-action="decrement"]'),
};

// 2. Cоздадим стчётчик нужный по условию задачи
let counterValue = 0;

// 3. Создадим функцию для обновления интерфейса
const renderValue = () => {
  references.valueCounterRef.textContent = counterValue;
};

// 4. Создадим Функции для увеличения и уменьшения значения счётчика
const increment = () => {
  counterValue += 1;
  renderValue();
};

const decrement = () => {
  if (counterValue !== 0) {
    counterValue -= 1;
    renderValue();
  }
};

// 4. Повесим слушатели события клик на кнопки с коллбэком
references.btnIncrementRef.addEventListener('click', () => increment());
references.btnDecrementRef.addEventListener('click', () => decrement());
