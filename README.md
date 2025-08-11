# Proyecto Landing Page - FitZone

## Justificación de decisiones de diseño y tecnología

Elegí desarollar el front-end de la landing page en**Tailwind CSS** debido a:

- **Edición rápida y directa**: Permite aplicar y modificar estilos directamente desde el HTML, evitando tener que abrir un archivo CSS separado para cada cambio.
- **Diseño responsivo integrado**: Con su sistema de breakpoints (`sm:`, `md:`, `lg:`) es sencillo asegurar que la página se adapte a distintos dispositivos.
- **Componentes visuales avanzados**: Incluye utilidades para animaciones, sombras, gradientes y efectos modernos, lo que permite crear interfaces atractivas con poco código.
- **Adecuado para un proyecto sencillo**: Dado que el objetivo era una **landing page** informativa, un framework como Tailwind resultó ideal para implementar el diseño de forma rápida y consistente.

Se utilizó **JavaScript** para:

- Gestionar la interactividad básica, como la apertura/cierre del menú móvil y la validación del formulario.
- Implementar un cambio de idioma dinámico sin recargar la página, almacenando la preferencia del usuario en `localStorage`.

Esta elección se hizo porque:

- El proyecto no requería un framework complejo como React o Vue.
- Vanilla JS es ligero, rápido y suficiente para la lógica requerida.

---

## Qué se podría mejorar con más tiempo

Si contara con más tiempo, implementaría las siguientes mejoras:

- **Internacionalización avanzada** usando librerías como `i18next` para manejar múltiples idiomas de forma más escalable.
- **Modo oscuro** configurable por el usuario.
- **Validaciones de formulario más robustas** que verifiquen formato de correo en ambos idiomas, longitud mínima de nombre, etc.
- **Animaciones más elaboradas** para transiciones y apariciones de elementos.

---

## Propuesta para la siguiente fase del proyecto

En una fase futura, el proyecto podría evolucionar a una plataforma más interactiva y conectada a un backend, incluyendo:

- **Sistema de login y registro** para que los usuarios puedan crear cuentas.
- **Panel de control para entrenadores** que les permita gestionar horarios y clases.
- **Formulario para aplicar como entrenador** con carga de CV y datos de experiencia.
- **Gestión de reservas de clases** en tiempo real.
- **Integración con pasarelas de pago** para planes y membresías.
