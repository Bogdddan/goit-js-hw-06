const input = document.querySelector('input#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', inputChange);

function inputChange(event){
    span.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ""){
        span.textContent = "Anonymus"
    }
};