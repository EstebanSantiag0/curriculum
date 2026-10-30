// Tema inicial: el que eligió el visitante en esta sesión o, si no, el del navegador.
// Va antes de los estilos para que la página no parpadee en claro al cargar.
(function () {
  var saved = sessionStorage.getItem('theme');
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
})();
