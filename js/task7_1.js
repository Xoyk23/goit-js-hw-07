// console.dir(categories);

/*
*Напиши скрипт, который выполнит следующие операции.
*Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

*Для каждого элемента li.item в списке ul#categories, 
*найдет и выведет в консоль текст заголовка элемента (тега h2) 
*и количество элементов в категории (всех вложенных в него элементов li).

*Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

// 1. Обьявим переменную categories и обратимся к дому по айди
const categories = document.querySelector('#categories');
//  2. Выведем в консоль количество дочернимх элементов используя свойство
// .childElementCount(делает тоже самое что и element.children.length)
console.log(`В списке ${categories.childElementCount} категории`);

//  3. Обьявим переменную allItems и обратимся к дом елементам по классу
const allItems = categories.querySelectorAll('.item');
// 4. Переберём через фор ич т.к на выходе мы получаем псевдо-массив к первому дочернему елементу
// итема применим свойство текст контент и получим заголовок, к  последнему применим .childElementCount
// и получим кол-во елементов
allItems.forEach(elem =>
  console.log(
    `Категория: ${elem.firstElementChild.textContent} \nКоличество элементов: ${elem.lastElementChild.childElementCount}`,
  ),
);

// Альтернативные метод который обращается к первому элементу через elem.childNodes[1].textContent
// для последнего элемента не нашел способ посчтитать кол-во элементов

// const allTitles = categories.querySelectorAll('.item');
// allTitles.forEach(elem =>
//   console.log(
//     `Категория: ${elem.childNodes[1].textContent} \nКоличество элементов: ${elem.lastElementChild.childElementCount}`,
//   ),
// );
