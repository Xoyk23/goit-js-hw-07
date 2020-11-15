/*
 * В HTML есть пустой список ul#ingredients.
 * В JS есть массив строк.
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
 * после чего вставит все li за одну операцию в список ul.ingredients.
 *Для создания DOM-узлов используй document.createElement().
 */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// =========================МетодРучной============================================================

// const sprededIngredients = [...ingredients];
// const liRef = document.createElement('li');
// liRef.textContent = ingredients[0];

// const liRefSecond = document.createElement('li');
// liRefSecond.textContent = ingredients[1];

// const liRefThird = document.createElement('li');
// liRefThird.textContent = ingredients[2];

// const liRefFourth = document.createElement('li');
// liRefFourth.textContent = ingredients[3];

// const liRefFifth = document.createElement('li');
// liRefFifth.textContent = ingredients[4];

// const liRefSixth = document.createElement('li');
// liRefSixth.textContent = ingredients[5];

// const ulList = document.querySelector('#ingredients');
// ulList.append(
//   liRef,
//   liRefSecond,
//   liRefThird,
//   liRefFourth,
//   liRefFifth,
//   liRefSixth,
// );

// console.log(
//   liRef,
//   liRefSecond,
//   liRefThird,
//   liRefFourth,
//   liRefFifth,
//   liRefSixth,
// );

// ================================МетодЧерезФункцию=======================================

// 1.Функция будет использоваться как коллбєк, создаёт ли с текстом, возвращает созданную ли

const createLi = item => {
  const liRef = document.createElement('li');
  liRef.textContent = item;

  return liRef;
};

// 2. вызываем на массив ингридиентов метод мап   параметром колбек функции которого будет каждый раз
// новый ингридиент.Ретёрнит эта функция вызов с п. 1 с аргументом - ингридиент.
const listArray = ingredients.map(ingridient => createLi(ingridient));
// console.log(...listArray);

// 3. Ищем список по айди и аппендим в него расспылённый массив который мы получили в результате вызова мапа
const ulListRef = document.querySelector('#ingredients');
ulListRef.append(...listArray);
