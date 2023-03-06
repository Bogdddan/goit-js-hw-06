const categoriesLi = document.querySelectorAll('.item');
console.log(`Number of Categories: ${categoriesLi.length}`);

categoriesLi.forEach((el) => {
    const categoryName = el.querySelector('h2').textContent;
    const numberOfEl = el.querySelectorAll('li').length;
    console.log(
        `Category: ${categoryName} 
        Elements: ${numberOfEl}`
    )
})