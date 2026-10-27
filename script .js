const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const nie = document.getElementById("nie").value;
    const edad = document.getElementById("edad").value;
    const grado = document.getElementById("grado").value;
    const seccion = document.getElementById("seccion").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const mensaje = document.getElementById("mensaje");
    const resultado = document.getElementById("resultado");

    if (
        nombre === "" ||
        nie === "" ||
        edad === "" ||
        grado === "" ||
        seccion === "" ||
        correo === "" ||
        telefono === ""
    ) {
        mensaje.textContent = "⚠ Debe completar todos los campos.";
        mensaje.className = "error";
        resultado.innerHTML = "";
        return;
    }

    mensaje.textContent = "ESTUDIANTE REGISTRADO CORRECTAMENTE";
    mensaje.className = "exito";

    resultado.innerHTML = `
        <h3>Datos registrados</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>NIE:</strong> ${nie}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Grado:</strong> ${grado}</p>
        <p><strong>Sección:</strong> ${seccion}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
    `;

});