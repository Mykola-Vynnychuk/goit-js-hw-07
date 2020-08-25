const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const createList = ingredient => {
  const itemListRef = document.createElement('li');
  itemListRef.textContent = ingredient;
  return itemListRef;
};
const ingredientList = ingredients.map(ingredient => createList(ingredient));
document.querySelector('#ingredients').append(...ingredientList);
