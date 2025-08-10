document.addEventListener("DOMContentLoaded", () => {
    // Inicializar constantes
    const form = document.getElementById("freeClassForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const submitBtn = form.querySelector("button[type='submit']");
    const formMsg = document.getElementById("formMsg");

    // Desactivar el botón al inicio
    submitBtn.disabled = true;
    submitBtn.classList.add("opacity-50", "cursor-not-allowed");

    // Función para verificar si los campos están llenos
    function checkFields() {
        const nameFilled = nameInput.value.trim() !== "";
        const emailFilled = emailInput.value.trim() !== "";
        if (nameFilled && emailFilled) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add("opacity-50", "cursor-not-allowed");
        }
    }

    // Detectar cambios en los campos
    nameInput.addEventListener("input", checkFields);
    emailInput.addEventListener("input", checkFields);

    // Manejar el envío solo por parte del front
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // No recargar la página

        formMsg.textContent = "¡Gracias! Nos pondremos en contacto pronto.";
        formMsg.classList.remove("text-rose-600");
        formMsg.classList.add("text-green-600");

        form.reset();  // Limpiar campos
        checkFields(); // Desactivar botón otra vez
    });
});