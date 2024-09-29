const form = document.querySelector("#form");
const docInput = document.querySelector("#documento");
const cpfInput = document.querySelector("#cpf");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(doc.value === "") {
        alert("Por favor, preencha o seu documento");
        return;
    }

    if(!validateDOC(doc.value, 9)) {
        alert("A senha precisa ter ao menos 9 dígitos.");
        return;
    }

    if(cpfInput.value === "") {
        alert("Por favor, preencha o seu CPF");
        return;
    }

    if(!validateDOC(cpfInput.value, 11)) {
        alert("A senha precisa ter ao menos 11 dígitos.");
        return;
    }

    window.location.href = '/Onde%20Hoje/Perfil-Interesses/profile.html';
});


function validateDOC(doc, minDigits) {
    return doc.length >= minDigits;
 }