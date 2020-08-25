console.group('Task-01');
console.log(`У списку ${categories.childElementCount} категорії.`);

Object.values(categories.children).forEach(element => {
  console.log(`Категорія: ${element.children[0].textContent}
Кількість елементів: ${element.children[1].childElementCount}`);
});
console.groupEnd();

// const numberOfItem = document.querySelectorAll('.item');
// console.log(`У списку ${numberOfItem.length} категорії.`);

// console.dir(numberOfItem);

// const titleAndSumOfItem = numberOfItem.forEach(element => {
//   console.log(`Категорія: ${element.querySelector('h2').textContent}
// Кількість елементів: ${element.querySelector('li').length}`);
// });
