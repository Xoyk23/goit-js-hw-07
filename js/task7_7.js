/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

//1.Получим ссылку на инпут
const fontSizeControlRef = document.querySelector('#font-size-control');
console.dir(fontSizeControlRef);

// 2. Получми ссылку на спан
const spanTextRef = document.querySelector('#text');

// 3. Повесим слушатель на инпут который будет менять HTMLElement.style
// 4. Через консоль дир нашел свойство valueAsNumber будем использовать его для размера шрифта спана
fontSizeControlRef.addEventListener('input', () => {
  spanTextRef.style.fontSize = `${fontSizeControlRef.valueAsNumber}px`;
});
