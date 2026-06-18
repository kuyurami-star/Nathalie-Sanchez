document.addEventListener("DOMContentLoaded", function() {
    
    const boton = document.getElementById("btn-contacto");
    const mensaje = document.getElementById("mensaje-oculto");

    boton.addEventListener("click", function() {
        if (mensaje.classList.contains("hidden")) {
            mensaje.classList.remove("hidden");
            mensaje.classList.add("show");
            boton.textContent = "Ocultar Mensaje";
        } else {
            mensaje.classList.remove("show");
            mensaje.classList.add("hidden");
            boton.textContent = "Ver Mensaje de Inspiración";
        }
    });
});