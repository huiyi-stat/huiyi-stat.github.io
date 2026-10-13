(function () {
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem('theme'); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem('theme', v); } catch (e) {} }
  var s = stored();
  if (s === 'dark' || s === 'light') root.setAttribute('data-theme', s);

  document.addEventListener('DOMContentLoaded', function () {
    var tt = document.getElementById('theme-toggle');
    if (tt) tt.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next); save(next);
    });
    var nt = document.getElementById('nav-toggle'), menu = document.getElementById('nav-menu');
    if (nt && menu) nt.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      nt.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('[data-bib]').forEach(function (b) {
      b.addEventListener('click', function () {
        var el = document.getElementById(b.getAttribute('data-bib'));
        if (el) { el.hidden = !el.hidden; b.setAttribute('aria-expanded', el.hidden ? 'false' : 'true'); }
      });
    });
  });
})();
