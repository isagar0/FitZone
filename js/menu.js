// Obtiene referencias a los elementos del menú móvil
const mobileOpen = document.getElementById('mobileOpen');
const mobileMenu = document.getElementById('mobileMenu');

// Alternar la visibilidad del menú móvil
mobileOpen.addEventListener('click', () => {
  const expanded = mobileOpen.getAttribute('aria-expanded') === 'true';
  mobileOpen.setAttribute('aria-expanded', (!expanded).toString());
  mobileMenu.classList.toggle('hidden');
});