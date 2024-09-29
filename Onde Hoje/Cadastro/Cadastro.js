const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(nameInput.value.length < 5) {
        alert("Por favor, preencha o seu nome completo");
        return;
    }

    if(dateInput.value === "") {
        alert("Por favor, preencha sua data de nascimento");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }
    if(!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser ao menos 8 dígitos.");
        return;
    }

    window.location.href='/Onde%20Hoje/Verificação/Verificação.html'
});

function isEmailValid(email) {
    const rgx = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]/
    );
    
    return rgx.test(email);
}

function validatePassword(password, minDigits) {
    return password.length >= minDigits;
 }
