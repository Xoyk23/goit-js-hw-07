/*
 *
 *
 *
 *
 */

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
console.log(inputNameRef.textContent);
console.log(outputNameRef.textContent);

inputNameRef.addEventListener('input', () => {
  if (inputNameRef.value === '') {
    outputNameRef.textContent = 'незнакомец';
  } else {
    outputNameRef.textContent = inputNameRef.value;
  }
});
