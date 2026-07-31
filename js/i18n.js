(function () {
  const STORAGE_KEY = 'la_salle_9_lang';
  const SUPPORTED_LANGS = ['fr', 'en', 'es', 'de'];
  const DEFAULT_LANG = 'fr';
  const LANGUAGE_NAMES = {
    fr: 'Français',
    en: 'English',
    es: 'Español',
    de: 'Deutsch'
  };
  const LANGUAGE_CODES = {
    fr: 'FR',
    en: 'EN',
    es: 'ES',
    de: 'DE'
  };
  const FLAG_MARKUP = {
    fr: `<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="8" height="16" fill="#0055a4"/>
      <rect x="8" width="8" height="16" fill="#fff"/>
      <rect x="16" width="8" height="16" fill="#ef4135"/>
    </svg>`,
    en: `<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#012169"/>
      <path d="M0 0 24 16M24 0 0 16" stroke="#fff" stroke-width="4"/>
      <path d="M0 0 24 16M24 0 0 16" stroke="#c8102e" stroke-width="2"/>
      <path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="6"/>
      <path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="3"/>
    </svg>`,
    es: `<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#aa151b"/>
      <rect y="4" width="24" height="8" fill="#f1bf00"/>
    </svg>`,
    de: `<svg class="lang-flag" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="5.34" fill="#000"/>
      <rect y="5.33" width="24" height="5.34" fill="#dd0000"/>
      <rect y="10.66" width="24" height="5.34" fill="#ffce00"/>
    </svg>`
  };

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
    document.querySelectorAll('.lang-selector').forEach(selector => {
      const trigger = selector.querySelector('.lang-select-trigger');
      const currentFlag = selector.querySelector('.lang-current-flag');
      const currentCode = selector.querySelector('.lang-current-code');

      if (currentFlag) currentFlag.innerHTML = FLAG_MARKUP[currentLang];
      if (currentCode) currentCode.textContent = LANGUAGE_CODES[currentLang];
      if (trigger) {
        trigger.setAttribute('aria-label', `${t('nav.lang_select')}: ${LANGUAGE_NAMES[currentLang]}`);
      }

      selector.querySelectorAll('.lang-option').forEach(option => {
        const selected = option.dataset.lang === currentLang;
        option.setAttribute('aria-selected', String(selected));
        option.classList.toggle('selected', selected);
      });
    });
  };

  const initLanguageSelector = () => {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions || navActions.querySelector('.lang-selector')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lang-selector';
    wrapper.innerHTML = `
      <span class="lang-selector-label" data-i18n="nav.lang_select">${t('nav.lang_select')}</span>
      <button class="lang-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="lang-current-flag"></span>
        <span class="lang-current-code"></span>
        <svg class="lang-chevron" viewBox="0 0 12 8" aria-hidden="true">
          <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="lang-menu" role="listbox" aria-label="${t('nav.lang_select')}" hidden>
        ${SUPPORTED_LANGS.map(lang => `
          <button class="lang-option" type="button" role="option" data-lang="${lang}" aria-selected="false">
            ${FLAG_MARKUP[lang]}
            <span>${LANGUAGE_NAMES[lang]}</span>
          </button>
        `).join('')}
      </div>
    `;

    const themeBtn = navActions.querySelector('.theme-toggle');
    if (themeBtn) {
      navActions.insertBefore(wrapper, themeBtn);
    } else {
      navActions.appendChild(wrapper);
    }

    const trigger = wrapper.querySelector('.lang-select-trigger');
    const menu = wrapper.querySelector('.lang-menu');
    const closeMenu = () => {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    };

    trigger.addEventListener('click', () => {
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      trigger.setAttribute('aria-expanded', String(willOpen));
      if (willOpen) {
        const selectedOption = menu.querySelector('[aria-selected="true"]');
        if (selectedOption) selectedOption.focus();
      }
    });

    wrapper.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        setLanguage(option.dataset.lang);
        closeMenu();
        trigger.focus();
      });
    });

    wrapper.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        trigger.focus();
      }
    });

    document.addEventListener('click', event => {
      if (!wrapper.contains(event.target)) closeMenu();
    });

    updateSelectorUI();
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
