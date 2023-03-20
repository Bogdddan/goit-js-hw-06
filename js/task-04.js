const button2 = document.querySelector('button[data-action="decrement"]');
const button1 = document.querySelector('button[data-action="increment"]');
const numbers = document.getElementById('value');
let counterValue = 0;
button1.addEventListener('click' , ( ) => {
    counterValue += 1;
    numbers.innerHTML = counterValue;
})
button2.addEventListener('click' , () => {
    counterValue -= 1;
    numbers.innerHTML = counterValue;
})

