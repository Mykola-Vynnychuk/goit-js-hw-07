const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  spanRef.textContent = event.target.value;
});

inputRef.addEventListener('input', event => {
  spanRef.textContent === ''
    ? (spanRef.textContent = 'незнайомець')
    : (spanRef.textContent = event.target.value);
});
