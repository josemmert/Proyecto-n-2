let formulario = document.getElementById('contact-form');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    enviarFormulario();
    
});

function validarNombre() {
    let nombre = document.getElementById('nombre').value;
    let errorNombre = document.getElementById('errorNombre');

    if (nombre.trim() === '') {
        errorNombre.innerHTML = 'Por favor, ingrese su nombre.';
        return false;
    } else {
        errorNombre.innerHTML = '';
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById('email').value;
    let errorEmail = document.getElementById('errorEmail');

    // Patrón simple para validar el formato del correo electrónico
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorEmail.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
        return false;
    } else {
        errorEmail.innerHTML = '';
        return true;
    }
}

function validarConsulta() {
    let consulta = document.getElementById('consulta').value;
    let errorConsulta = document.getElementById('errorConsulta');

    if (consulta.trim() === '') {
        errorConsulta.innerHTML = 'Por favor, ingrese su consulta u opinión.';
        return false;
    } else {
        errorConsulta.innerHTML = '';
        return true;
    }
}

function enviarFormulario() {
    // Llamar a las funciones de validación
    let nombreValido = validarNombre();
    let emailValido = validarEmail();
    let consultaValida = validarConsulta();

    // Si todas las validaciones son exitosas, puedes enviar el formulario
    if (nombreValido && emailValido && consultaValida) {
        Swal.fire({
            position: "top-center",
            color: "#212121",
            icon: "success",
            title: `consulta enviada`,
            showConfirmButton: false,
            timer: 1500,
          });
          formulario.reset();
        // Aquí puedes agregar código para enviar el formulario a un servidor, por ejemplo.
    } else {
        Swal.fire({
            imageUrl: "../img/error.png",
            text: "formulario erroneo",
            confirmButtonColor: "#0d6efd",
            color: "#212121",
          });
    }
}