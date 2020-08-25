const inputRangeRef = document.querySelector('#font-size-control');
const spanSizeRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', () => {
  spanSizeRef.style.fontSize = `${inputRangeRef.value}px`;
});
