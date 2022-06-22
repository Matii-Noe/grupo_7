
const firstNameField = document.querySelector('#firstName');
const lastNameField = document.querySelector('#lastName');
const passwordField = document.querySelector('#password');
const emailField = document.querySelector('#email')

/* Validacion inputs vacios */

const validateEmptyField = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    console.log(field)

    if (fieldValue.trim().length == 0) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerHTML =
            `${field.name} esta vacio`;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove('error');
        field.nextElementSibling.innerHTML = "";
    }
}
/* Validaciones para nombres */

const validateUserName = e => {
    const field = e.target;
    const fieldValue = e.target.value;

    if (fieldValue.trim().length >= 2) {
        field.classList.add('valid');
    } else if (fieldValue.trim().length == 1) {
        field.classList.remove('valid');
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerHTML = "Debe contener como minimo 2 caracteres"
    } else {
        field.classList.remove('valid');
    }
}

/* Validaciones para contraseña */

const validatePassword = e => {
    const field = e.target;
    const fieldValue = e.target.value;

    if (fieldValue.trim().length >= 8) {
        field.classList.add('valid');
    } else if (fieldValue.trim().length >= 1 && fieldValue.trim().length < 8) {
        field.classList.remove('valid');
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerHTML = "Debe contener como minimo 8 caracteres"
    } else {
        field.classList.remove('valid');
    }
}

/* Validaciones para email*/

const validateEmail = e => {
    const field = e.target;
    const fieldValue = e.target.value

    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(emailField.value)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerHTML = "El email no es válido";
        field.classList.remove('valid');
    } else {
        field.classList.add('valid');
    }

}

firstNameField.addEventListener("blur", validateEmptyField)
lastNameField.addEventListener("blur", validateEmptyField)
passwordField.addEventListener("blur", validateEmptyField)
emailField.addEventListener("blur", validateEmptyField)

firstNameField.addEventListener('blur', validateUserName);
lastNameField.addEventListener('blur', validateUserName);
passwordField.addEventListener('blur', validatePassword);
emailField.addEventListener('blur', validateEmail);
