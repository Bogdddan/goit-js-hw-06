const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



// const firstElemLi = document.createElement("li");
// firstElemLi.textContent = 'Potatoes'
// firstElemLi.classList.add('item')



const ingredientsList = document.querySelector('#ingredients');


const addIli = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});

ingredientsList.append(...addIli);
