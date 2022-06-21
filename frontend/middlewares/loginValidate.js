window.addEventListener('load', function () {

    const passwordField = document.querySelector('[name=password]');
    const emailField = document.querySelector('[name=email]')
    const form = document.querySelector('form')

    form.addEventListener('sumbit', e => {
        e.preventDefault()
    })

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

    function validateEmail(email) {
        const field = email.target;
        const fieldValue = email.target.value;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(fieldValue)) {
            field.classList.add('valid')
        }
    }

    passwordField.addEventListener("blur", validateEmptyField)
    emailField.addEventListener("blur", validateEmptyField)

    passwordField.addEventListener('blur', validatePassword);
    emailField.addEventListener('blur', validateEmail);
})