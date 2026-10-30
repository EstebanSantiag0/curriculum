// Botón sol/luna: cambia el tema con un círculo que se expande desde el botón.
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function updateLabel() {
    var label = i18n.t(root.classList.contains('dark') ? 'theme.toLight' : 'theme.toDark');
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
  }

  function setTheme(dark) {
    root.classList.add('theme-switching');
    root.classList.toggle('dark', dark);
    updateLabel();
    // Se quitan las transiciones de color durante el cambio para que no se mezclen con el círculo
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { root.classList.remove('theme-switching'); });
    });
  }

  toggle.addEventListener('click', function () {
    var dark = !root.classList.contains('dark');
    sessionStorage.setItem('theme', dark ? 'dark' : 'light');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      setTheme(dark);
      return;
    }

    // Centro del botón y radio hasta la esquina más lejana de la ventana. Se pasan a CSS como
    // variables para que el círculo empiece en 0 desde el primer cuadro (si se anima desde JS,
    // la página nueva alcanza a verse completa un cuadro y parpadea)
    var rect = toggle.getBoundingClientRect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty('--theme-x', x + 'px');
    root.style.setProperty('--theme-y', y + 'px');
    root.style.setProperty('--theme-r', radius + 'px');

    document.startViewTransition(function () { setTheme(dark); });
  });

  // Si el visitante no ha elegido tema, sigue los cambios del sistema
  systemDark.addEventListener('change', function (e) {
    if (!sessionStorage.getItem('theme')) setTheme(e.matches);
  });

  document.addEventListener('i18n:change', updateLabel);
  updateLabel();
})();
