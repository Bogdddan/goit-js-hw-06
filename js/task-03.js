const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ul = document.querySelector('.gallery');
const img = document.querySelectorAll('.galery-img');
const p = document.querySelector('.photoP');
const addimg = ({url , alt}) => {
  return `
    <li class = "galery-img">
      <img src="${url}" alt="${alt}" width = 350px height = 200px>
      <p class = "photoP">${alt}</p>
    </li>
  `
};
const dgsug = images.map(addimg).join('');

ul.insertAdjacentHTML('beforeend' , dgsug);


ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.alignItems = 'center';
ul.style.justifyContent = 'center';
ul.style.gap = '15px';
console.log(ul.style);