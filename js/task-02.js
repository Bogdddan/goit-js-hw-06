const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');


const addLiinUl = ingredients.map(ingredient => {
  const createEl = document.createElement('li');
  createEl.classList.add('item');
  createEl.textContent = ingredient;
  return createEl;
});
ul.append(...addLiinUl);