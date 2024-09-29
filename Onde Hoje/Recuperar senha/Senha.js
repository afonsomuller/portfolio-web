const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    form.submit();
});
function isEmailValid(email) {
    const rgx = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]/
    );
    
    return rgx.test(email);
}
