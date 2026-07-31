(function () {
  const STORAGE_KEY = 'la_salle_9_lang';
  const SUPPORTED_LANGS = ['fr', 'en', 'es', 'de'];
  const DEFAULT_LANG = 'fr';

  const getSavedLang = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
      const navLang = (navigator.language || '').slice(0, 2).toLowerCase();
      if (SUPPORTED_LANGS.includes(navLang)) return navLang;
    } catch (e) {
      console.warn('Storage error:', e);
    }
    return DEFAULT_LANG;
  };

  let currentLang = getSavedLang();

  const t = (key, params = {}) => {
    const dict = (window.translations && window.translations[currentLang]) || (window.translations && window.translations[DEFAULT_LANG]) || {};
    let text = dict[key] || (window.translations && window.translations[DEFAULT_LANG] && window.translations[DEFAULT_LANG][key]) || key;

    Object.keys(params).forEach(p => {
      text = text.replace(new RegExp(`{\\s*${p}\\s*}`, 'g'), params[p]);
    });
    return text;
  };

  const translateDOM = () => {
    document.documentElement.lang = currentLang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = t(key);
      if (translated && translated !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = translated;
        } else {
          el.textContent = translated;
        }
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translated = t(key);
      if (translated) el.placeholder = translated;
    });

    // Alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const translated = t(key);
      if (translated) el.alt = translated;
    });

    // ARIA Labels
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      const translated = t(key);
      if (translated) el.setAttribute('aria-label', translated);
    });

    // Titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const translated = t(key);
      if (translated) el.title = translated;
    });
  };

  const setLanguage = (lang) => {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Storage error:', e);
    }
    translateDOM();
    updateSelectorUI();
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  };

  const updateSelectorUI = () => {
    const selects = document.querySelectorAll('.lang-select-input');
    selects.forEach(select => {
      select.value = currentLang;
    });
  };

  const initLanguageSelector = () => {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions || navActions.querySelector('.lang-selector')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector';
    wrapper.innerHTML = `
      <label for="lang-select" class="sr-only" data-i18n="nav.lang_select">Langue</label>
      <select id="lang-select" class="lang-select-input" aria-label="Langue">
        <option value="fr">🇫🇷 FR</option>
        <option value="en">🇬🇧 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="de">🇩🇪 DE</option>
      </select>
    `;

    const themeBtn = navActions.querySelector('.theme-toggle');
    if (themeBtn) {
      navActions.insertBefore(wrapper, themeBtn);
    } else {
      navActions.appendChild(wrapper);
    }

    const selectEl = wrapper.querySelector('#lang-select');
    selectEl.value = currentLang;
    selectEl.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    translateDOM();
  });

  window.i18n = {
    t,
    setLanguage,
    getLanguage: () => currentLang,
    translateDOM
  };
})();
