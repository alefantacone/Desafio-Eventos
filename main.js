const form = document.getElementById('formulario');
form.addEventListener("submit", agregarFormulario );

function agregarFormulario (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const documento = document.getElementById('documento').value;
    const mail = document.getElementById('email').value;


    const imput = {
        nombre,
        apellido,
        documento,
        mail
    }
    console.log(imput);
};