/* Shared language toggle logic */
(function () {
  const STORED = localStorage.getItem('ysnLang') || 'en';
  let lang = STORED;

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute('data-' + lang);
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else if (el.innerHTML && el.innerHTML.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
  }

  window.toggleLang = function () {
    lang = lang === 'en' ? 'fr' : 'en';
    localStorage.setItem('ysnLang', lang);
    apply();
  };

  window.toggleNav = function () {
    document.getElementById('main-nav').classList.toggle('open');
  };

  document.addEventListener('DOMContentLoaded', apply);
})();
