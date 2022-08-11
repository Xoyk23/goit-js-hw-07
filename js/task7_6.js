/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

//1. Получаем ссылку на инпут
const inputRef = document.querySelector('#validation-input');

//2. Создаём переменную для дата атрибута length приведённую к числу (так как по умолчанию это строка), для удобства обращения
const dataLength = Number(inputRef.dataset.length);

// 3. Вешаем слушатель события на инпут
// 4. Внутри коллбэк функции Пишем цикл else if  в котором проводим проверки и в заменяем или удаляем классы

inputRef.addEventListener('blur', e => {
  inputRef.classList.add('invalid');
  if (inputRef.value.length === dataLength) {
    inputRef.classList.replace('invalid', 'valid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  } else {
    inputRef.classList.replace('valid', 'invalid');
  }
});
