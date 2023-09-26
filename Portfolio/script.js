// Selecciona todos los botones "Ver Video"
const expandButtons = document.querySelectorAll('.expand-button');

// Agrega un evento clic a cada botón
expandButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Encuentra el elemento padre (la tarjeta) y cambia su estilo para mostrar los detalles
        const card = button.closest('.project-card');
        const details = card.querySelector('.project-details');

        // Alterna la visibilidad de los detalles al hacer clic
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
});
