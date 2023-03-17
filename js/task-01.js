const qwe = document.querySelectorAll('.item');
console.log(`Number of categories: ${qwe.length}`);

qwe.forEach(el => {
    const H2 = el.querySelector('h2').textContent;
    const liyu = el.querySelectorAll('li').length;
    console.log(
        `Category: ${H2}.
Elements: ${liyu}`
        )
});