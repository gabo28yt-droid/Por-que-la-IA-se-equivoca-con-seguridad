/* script.js
   Marca en el menú la sección que se está viendo mientras haces scroll. */

// Todas las secciones de la página y todos los enlaces del menú
const secciones = document.querySelectorAll("section[id]");
const enlaces = document.querySelectorAll("nav a");

// El observador avisa cuando una sección entra en la parte central de la pantalla
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // Quita la marca a todos los enlaces y se la pone solo al de la sección visible
      enlaces.forEach((a) => a.classList.remove("activo"));
      const activo = document.querySelector('nav a[href="#' + entrada.target.id + '"]');
      if (activo) activo.classList.add("activo");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

// Le pedimos al observador que vigile cada sección
secciones.forEach((sec) => observador.observe(sec));
