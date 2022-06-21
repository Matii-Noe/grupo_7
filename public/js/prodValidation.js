window.addEventListener('load', function () {
    const productName = document.querySelector('#productname')
    const description = document.querySelector('#description');
    const bigImg = document.querySelector('#bigImg');
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


    /* Validaciones para nombres */

    const validateProductName = e => {
        const field = e.target;
        const fieldValue = e.target.value;

        if (fieldValue.trim().length >= 5) {
            field.classList.add('valid');
        } else if (fieldValue.trim().length < 5) {
            field.classList.remove('valid');
            field.classList.add('invalid')
            field.nextElementSibling.classList.add('error');
            field.nextElementSibling.innerHTML = "Debe contener como minimo 5 caracteres"
        } else {
            field.classList.remove('valid');
        }
    }

    const validateDescription = e => {
        const field = e.target;
        const fieldValue = e.target.value;

        if (fieldValue.trim().length >= 20) {
            field.classList.add('valid');
        } else if (fieldValue.trim().length < 20) {
            field.classList.remove('valid');
            field.classList.add('invalid')
            field.nextElementSibling.classList.add('error');
            field.nextElementSibling.innerHTML = "Debe contener como minimo 20 caracteres"
        } else {
            field.classList.remove('valid');
        }
    }

    var image = document.getElementById("bigImg").value;

    var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!allowedExtensions.exec(image)) {
        errbigImg.classList.remove("valid");
        errbigImg.classList.add("invalid");
        errbigImg.innerHTML =
            "Sube un archivo con alguna de estas extencioes .jpeg/.jpg/.png";
        bigImgInput.focus()
        return;
    } else {
        errbigImg.classList.add("valid");
        errbigImg.classList.remove("invalid");
    }


    productName.addEventListener("blur", validateEmptyField);
    description.addEventListener("blur", validateEmptyField);
    bigImg.addEventListener("blur", validateEmptyField);

    productName.addEventListener("blur", validateProductName);
    description.addEventListener('blur', validateDescription);
})