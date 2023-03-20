const loginF = document.querySelector('form.login-form');

loginF.addEventListener('submit' , (event) => {
    event.preventDefault();

    const email = loginF.elements.email.value;
    const password = loginF.elements.password.value;

    if (email === '' || password === ''){
        alert('будь ласка заповніть поля');
    } else {
        const formss = {
            email: email,
            password: password,
        };
    
        console.log(formss);
        loginF.reset();
    }
})
