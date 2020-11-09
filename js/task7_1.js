const categories = document.querySelector('#categories');
// console.dir(categories);
console.log(`В списке ${categories.childElementCount} категории`);

// const allTitles = categories.querySelectorAll('.item');
// allTitles.forEach(elem =>
//   console.log(
//     `Категория: ${elem.childNodes[1].textContent} \nКоличество элементов: ${elem.lastElementChild.childElementCount}`,
//   ),
// );

const allTitles = categories.querySelectorAll('.item');
allTitles.forEach(elem =>
  console.log(
    `Категория: ${elem.firstElementChild.textContent} \nКоличество элементов: ${elem.lastElementChild.childElementCount}`,
  ),
);
