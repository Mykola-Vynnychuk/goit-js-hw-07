const counterValue = document.getElementById('value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

function handleDecrement(event) {
  --counterValue.textContent;
}

function handleIncrement(event) {
  ++counterValue.textContent;
}

btnDecrement.addEventListener('click', handleDecrement);
btnIncrement.addEventListener('click', handleIncrement);

// document.querySelector('button[data-action="decrement"]').addEventListener('click', () => {--counterValue.textContent;});
// document.querySelector('button[data-action="increment"]').addEventListener('click', () => {++counterValue.textContent;});
