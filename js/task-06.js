const validationInputRef = document.getElementById('validation-input');
validationInputRef.addEventListener('focus', onValidationLengthRemove);
validationInputRef.addEventListener('blur', onValidationLengthAdd);

function onValidationLengthRemove() {
  validationInputRef.classList.remove('valid');
  validationInputRef.classList.remove('invalid');
}

function onValidationLengthAdd() {
  validationInputRef.value.length ===
  +validationInputRef.getAttribute('data-length')
    ? validationInputRef.classList.add('valid')
    : validationInputRef.classList.add('invalid');
}
