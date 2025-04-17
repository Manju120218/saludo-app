// script.js
document.getElementById('saludarBtn').addEventListener('click', function () {
    // Obtener el valor del input
    const nombre = document.getElementById('nombreInput').value;

    // Verificar si el usuario ingresó un nombre
    if (nombre.trim() === "") {
        alert("Por favor, introduce tu nombre.");
    } else {
        // Mostrar el saludo personalizado
        const mensaje = `¡Hola, ${nombre}! Bienvenido.`;
        document.getElementById('mensajeSaludo').textContent = mensaje;
    }
});