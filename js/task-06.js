


const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
const requiredLength = parseInt(input.dataset.length);

if (input.value.length === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
} else {
    input.classList.remove("valid");
    input.classList.add("invalid");
}
});
