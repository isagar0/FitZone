// Obtener elementos del DOM
const langToggle = document.getElementById('langToggle');
const msg = document.getElementById('formMsg');

// Objeto de traducciones
const translations = {
  es: {
    // META
    title: 'FitZone — Transforma tu cuerpo',
    metaDescription: 'FitZone: gimnasio moderno para jóvenes. Clases, entrenadores, horarios y una prueba gratuita.',

    // HEADER
    navServicios: 'Servicios',
    navHorarios: 'Horarios',
    navTestimonios: 'Testimonios',
    navClaseGratis: '¡Clase gratis!',

    // HERO
    heroTitle: 'Transforma tu cuerpo en FitZone',
    heroDesc: 'Entrena en un espacio moderno con entrenadores expertos y programas para todos los niveles.',
    heroCTAText: '¡Obtén tu clase gratis!',

    // SERVICIOS
    serviciosTitle: 'Servicios',
    serviciosDesc: 'Opciones para todos los objetivos: fuerza, resistencia, pérdida de peso y bienestar.',
    servicio1Title: 'Musculación',
    servicio1Desc: 'Equipos de última generación para desarrollar fuerza y masa muscular.',
    servicio2Title: 'Clases Grupales',
    servicio2Desc: 'Zumba, yoga, HIIT y más para mantenerte motivado.',
    servicio3Title: 'Entrenamiento Personal',
    servicio3Desc: 'Programas diseñados para tus metas específicas.',

    // HORARIOS
    horariosTitle: 'Horarios',
    horariosDesc: 'Horarios semanales (sujeto a cambios).',
    tablaDia: 'Día',
    tablaApertura: 'Apertura',
    tablaCierre: 'Cierre',
    lunesViernes: 'Lunes a Viernes',
    sabado: 'Sábado',
    domingo: 'Domingo',

    // TESTIMONIOS
    testimoniosTitle: 'Testimonios',
    testimonio1: '"FitZone me cambió la vida. Los entrenadores son increíbles."',
    autor1: '— Ana M.',
    testimonio2: '"Ambiente motivador y máquinas de primera."',
    autor2: '— Carlos R.',
    testimonio3: '"Clases variadas que me mantienen activa."',
    autor3: '— Laura G.',

    // CTA FORM
    ctaTitle: '¡Obtén tu clase gratis!',
    ctaDesc: 'Déjanos tus datos y te contactamos para agendar tu primera clase.',
    formNamePlaceholder: 'Nombre',
    formEmailPlaceholder: 'Correo',
    formButtonText: 'Solicitar clase',
    formMsgEmpty: 'Por favor completa todos los campos.',
    formMsgSuccess: '¡Listo! Te contactaremos pronto para agendar tu clase.',

    // UBICACIÓN
    ubicacionTitle: 'Ubicación',
    ubicacionDesc: 'Estamos en el centro de la ciudad, cerca del parque principal.',

    // FOOTER
    footerCopyright: '© 2025 FitZone. Todos los derechos reservados.',
    footerContacto: 'Contacto: hola@fitzone.example · +52 1 55 1234 5678',
    footerSiguemos: 'Síguenos:',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerX: 'X'
  },
  en: {
    // META
    title: 'FitZone — Transform Your Body',
    metaDescription: 'FitZone: modern gym for young people. Classes, trainers, schedules, and a free trial.',

    // HEADER
    navServicios: 'Services',
    navHorarios: 'Schedule',
    navTestimonios: 'Testimonials',
    navClaseGratis: 'Free Class!',

    // HERO
    heroTitle: 'Transform Your Body at FitZone',
    heroDesc: 'Train in a modern space with expert trainers and programs for all levels.',
    heroCTAText: 'Get Your Free Class!',

    // SERVICIOS
    serviciosTitle: 'Services',
    serviciosDesc: 'Options for all goals: strength, endurance, weight loss and wellness.',
    servicio1Title: 'Strength Training',
    servicio1Desc: 'State-of-the-art equipment to build strength and muscle mass.',
    servicio2Title: 'Group Classes',
    servicio2Desc: 'Zumba, yoga, HIIT and more to keep you motivated.',
    servicio3Title: 'Personal Training',
    servicio3Desc: 'Programs tailored to your specific goals.',

    // HORARIOS
    horariosTitle: 'Schedule',
    horariosDesc: 'Weekly schedules (subject to change).',
    tablaDia: 'Day',
    tablaApertura: 'Opening',
    tablaCierre: 'Closing',
    lunesViernes: 'Monday to Friday',
    sabado: 'Saturday',
    domingo: 'Sunday',

    // TESTIMONIOS
    testimoniosTitle: 'Testimonials',
    testimonio1: '"FitZone changed my life. The trainers are amazing."',
    autor1: '— Ana M.',
    testimonio2: '"Motivating atmosphere and top-notch machines."',
    autor2: '— Carlos R.',
    testimonio3: '"Varied classes that keep me active."',
    autor3: '— Laura G.',

    // CTA FORM
    ctaTitle: 'Get Your Free Class!',
    ctaDesc: 'Leave us your details and we will contact you to schedule your first class.',
    formNamePlaceholder: 'Name',
    formEmailPlaceholder: 'Email',
    formButtonText: 'Request Class',
    formMsgEmpty: 'Please complete all fields.',
    formMsgSuccess: 'Done! We will contact you soon to schedule your class.',

    // UBICACIÓN
    ubicacionTitle: 'Location',
    ubicacionDesc: 'We are in the city center, near the main park.',

    // FOOTER
    footerCopyright: '© 2025 FitZone. All rights reserved.',
    footerContacto: 'Contact: hola@fitzone.example · +52 1 55 1234 5678',
    footerSiguemos: 'Follow us:',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerX: 'X'
  }
};

// Obtener el idioma actual o usar español por defecto
let currentLang = localStorage.getItem('fz_lang') || 'es';

// Aplicar las traducciones al DOM
function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.metaDescription);

  // HEADER
  document.querySelectorAll('nav a')[0].textContent = t.navServicios;
  document.querySelectorAll('nav a')[1].textContent = t.navHorarios;
  document.querySelectorAll('nav a')[2].textContent = t.navTestimonios;
  document.querySelectorAll('nav a')[3].textContent = t.navClaseGratis;

  // MOBILE MENU
  document.querySelectorAll('#mobileMenu a')[0].textContent = t.navServicios;
  document.querySelectorAll('#mobileMenu a')[1].textContent = t.navHorarios;
  document.querySelectorAll('#mobileMenu a')[2].textContent = t.navTestimonios;
  document.querySelectorAll('#mobileMenu a')[3].textContent = t.navClaseGratis;

  // HERO
  document.querySelector('h1').innerHTML = t.heroTitle.replace('FitZone', '<span class="text-rose-600">FitZone</span>');
  document.querySelector('section p').textContent = t.heroDesc;
  document.getElementById('btn1').textContent = t.heroCTAText;

  // SERVICIOS
  document.querySelector('#servicios h2').textContent = t.serviciosTitle;
  document.querySelector('#servicios p').textContent = t.serviciosDesc;
  document.querySelectorAll('#servicios h3')[0].textContent = t.servicio1Title;
  document.getElementById('servicio1-desc').textContent = t.servicio1Desc;
  document.querySelectorAll('#servicios h3')[1].textContent = t.servicio2Title;
  document.getElementById('servicio2-desc').textContent = t.servicio2Desc;
  document.querySelectorAll('#servicios h3')[2].textContent = t.servicio3Title;
  document.getElementById('servicio3-desc').textContent = t.servicio3Desc;

  // HORARIOS
  document.querySelector('#horarios h2').textContent = t.horariosTitle;
  document.querySelector('#horarios p').textContent = t.horariosDesc;
  document.querySelectorAll('#horarios th')[0].textContent = t.tablaDia;
  document.querySelectorAll('#horarios th')[1].textContent = t.tablaApertura;
  document.querySelectorAll('#horarios th')[2].textContent = t.tablaCierre;
  document.querySelectorAll('#horarios tbody td')[0].textContent = t.lunesViernes;
  document.querySelectorAll('#horarios tbody td')[3].textContent = t.sabado;
  document.querySelectorAll('#horarios tbody td')[6].textContent = t.domingo;

  // TESTIMONIOS
  document.querySelector('#testimonios h2').textContent = t.testimoniosTitle;
  document.querySelectorAll('#testimonios blockquote p')[0].textContent = t.testimonio1;
  document.querySelectorAll('#testimonios blockquote footer')[0].textContent = t.autor1;
  document.querySelectorAll('#testimonios blockquote p')[1].textContent = t.testimonio2;
  document.querySelectorAll('#testimonios blockquote footer')[1].textContent = t.autor2;
  document.querySelectorAll('#testimonios blockquote p')[2].textContent = t.testimonio3;
  document.querySelectorAll('#testimonios blockquote footer')[2].textContent = t.autor3;

  // CTA FORM
  document.querySelector('#cta h2').textContent = t.ctaTitle;
  document.querySelector('#cta p').textContent = t.ctaDesc;
  document.querySelector('#name').placeholder = t.formNamePlaceholder;
  document.querySelector('#email').placeholder = t.formEmailPlaceholder;
  document.querySelector('#freeClassForm button[type="submit"]').textContent = t.formButtonText;

  if (msg.textContent === translations.es.formMsgEmpty || msg.textContent === translations.en.formMsgEmpty) {
    msg.textContent = t.formMsgEmpty;
  } else if (msg.textContent === translations.es.formMsgSuccess || msg.textContent === translations.en.formMsgSuccess) {
    msg.textContent = t.formMsgSuccess;
  }

  // UBICACIÓN
  document.querySelector('#ubicacion h2').textContent = t.ubicacionTitle;
  document.querySelector('#ubicacion p').textContent = t.ubicacionDesc;

  // FOOTER
  document.querySelector('footer p.text-sm:nth-of-type(1)').textContent = t.footerCopyright;
  document.querySelector('footer p.text-sm:nth-of-type(2)').textContent = t.footerContacto;
  document.querySelector('footer p.text-sm:nth-of-type(3)').textContent = t.footerSiguemos;

  // Botón toggle idioma
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

// Aplicar el idioma actual
applyLanguage(currentLang);

// Cambiar el idioma al hacer clic en el botón
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('fz_lang', currentLang);
  applyLanguage(currentLang);
});