/*
  Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
  подставляет его текущее значение в span#name-output. 
  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

 *
 */

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
// console.log(inputNameRef.textContent);
// console.log(outputNameRef.textContent);

inputNameRef.addEventListener('input', () => {
  if (inputNameRef.value === '') {
    outputNameRef.textContent = 'незнакомец';
  } else {
    outputNameRef.textContent = inputNameRef.value;
  }
});

// inputNameRef.addEventListener('input', () => {
//   if (inputNameRef.value === null) {
//     outputNameRef.textContent = 'незнакомец';
//   } else if (inputNameRef.value === ' ') {
//     outputNameRef.textContent = 'незнакомец';
//   } else {
//     outputNameRef.textContent = inputNameRef.value;
//   }
// });
