document.addEventListener('DOMContentLoaded', async () => {
  // ==========================================================================
  // Theme Management (Dark / Light Mode)
  // ==========================================================================
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const favicon = document.querySelector('link[rel="icon"]');

  const updateFavicon = theme => {
    if (favicon) favicon.href = `assets/favicon-${theme}.svg`;
  };
  
  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateFavicon(initialTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update HTML attribute and save preference
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateFavicon(newTheme);
    });
  }

  // ==========================================================================
  // Mobile Navigation Menu Toggle
  // ==========================================================================
  const menuToggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggleBtn && navLinks) {
    menuToggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !menuToggleBtn.contains(event.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ==========================================================================
  // Activity viewer: instructions (PDF) / Scratch program
  // ==========================================================================
  const scratchProjects = {
    'act-3e-diviseurs': ['339277505'],
    'act-3e-images': ['282542420'],
    'act-3e-temperatures': ['144122707'],
    'act-3e-moyennes': ['522457753', '311035974'],
    'act-4e-pythagore': ['287154397'],
    'act-4e-angles': ['173898198'],
    'act-4e-moyenne': ['522457753', '311035974'],
    'act-4e-litteral': ['1161202414'],
    'act-5e-priorites': ['1074074100'],
    'act-5e-fractions': ['1331680541'],
    'act-5e-relatifs': ['174741757'],
    'act-5e-chocolat': ['166528869']
  };

  const escapeHtml = value => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const safeUrl = value => {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : '';
    } catch {
      return '';
    }
  };

  const getPdfEmbedUrl = value => {
    const url = safeUrl(value);
    if (!url) return '';

    const driveId = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/)?.[1];
    return driveId ? `https://drive.google.com/file/d/${driveId}/preview` : url;
  };

  const createActivityCard = activity => {
    const article = document.createElement('article');
    const id = String(activity.id || crypto.randomUUID()).replace(/[^a-zA-Z0-9_-]/g, '');
    const title = escapeHtml(activity.title || 'Nouvelle activité');
    const emoji = escapeHtml(activity.emoji || '💻');
    const pdfUrl = safeUrl(activity.pdfUrl);
    const pdfEmbedUrl = getPdfEmbedUrl(activity.pdfUrl);
    const pdfName = escapeHtml(activity.pdfName || decodeURIComponent(pdfUrl.split('/').pop() || 'Consignes.pdf'));
    const scratchId = String(activity.scratchId || '').replace(/\D/g, '');

    if (!id || !pdfUrl || !pdfEmbedUrl || !scratchId) return null;

    article.className = 'card-assignment';
    article.id = `custom-${id}`;
    article.dataset.scratchProjects = scratchId;
    article.innerHTML = `
      <div class="assignment-header">
        <div class="assignment-title-area">
          <span class="assignment-emoji">${emoji}</span>
          <h2 class="assignment-title">${title}</h2>
        </div>
        <div class="assignment-badges">
          <span class="badge badge-consignes">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h-2v-2h4v8zm0-10h-2V5h2v2z"/></svg>
            Les consignes
          </span>
          <span class="badge badge-programme">
            <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            Le programme à réaliser
          </span>
        </div>
      </div>
      <div class="embed-container">
        <div class="embed-toolbar">
          <div class="embed-filename">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            ${pdfName}
          </div>
          <div class="embed-actions">
            <a href="${escapeHtml(pdfUrl)}" target="_blank" rel="noopener" class="btn-embed-action" title="Agrandir">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Agrandir
            </a>
            <a href="${escapeHtml(pdfUrl)}" download class="btn-embed-action" title="Télécharger">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Télécharger
            </a>
          </div>
        </div>
        <div class="embed-iframe-wrapper">
          <div class="skeleton-loader">
            <div class="spinner"></div>
            <span class="loader-text">Chargement du document...</span>
          </div>
          <iframe class="embed-iframe" data-src="${escapeHtml(pdfEmbedUrl)}" allowfullscreen></iframe>
        </div>
      </div>`;

    return article;
  };

  const loadAdditionalActivities = async () => {
    const grade = document.body.dataset.grade;
    const list = document.querySelector('.assignments-list');
    if (!grade || !list) return;

    try {
      const response = await fetch(`data/activities.json?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const activities = await response.json();
      activities
        .filter(activity => activity.grade === grade && activity.active !== false)
        .sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''))
        .forEach(activity => {
          const card = createActivityCard(activity);
          if (card) list.appendChild(card);
        });
    } catch (error) {
      // Local file previews cannot fetch JSON; the original activities still work.
      console.warn('Impossible de charger les activités administrées :', error);
    }
  };

  const initializeEmbedContainer = container => {
    const assignment = container.closest('.card-assignment');
    const badges = assignment?.querySelector('.assignment-badges');
    const iframe = container.querySelector('.embed-iframe');
    const loader = container.querySelector('.skeleton-loader');
    const wrapper = container.querySelector('.embed-iframe-wrapper');
    const filename = container.querySelector('.embed-filename');
    const openLink = container.querySelector('.embed-actions a:first-child');
    const downloadLink = container.querySelector('.embed-actions a:last-child');

    if (!assignment || !badges || !iframe || !loader || !wrapper) return;

    const pdfSrc = iframe.dataset.src;
    const pdfOpenUrl = openLink?.href;
    const filenameTextNode = Array.from(filename?.childNodes || [])
      .find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    const openLinkTextNode = Array.from(openLink?.childNodes || [])
      .find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    const pdfFilename = filenameTextNode?.textContent.trim();
    const pdfOpenLabel = openLinkTextNode?.textContent.trim();
    const projectIds = assignment.dataset.scratchProjects
      ? assignment.dataset.scratchProjects.split(',').filter(Boolean)
      : (scratchProjects[assignment.id] || []);

    const setLoading = isLoading => {
      loader.classList.toggle('is-hidden', !isLoading);
      loader.querySelector('.loader-text').textContent = isLoading
        ? 'Chargement du contenu...'
        : '';
    };

    iframe.title = `Consignes — ${assignment.querySelector('.assignment-title')?.textContent.trim()}`;
    iframe.addEventListener('load', () => setLoading(false));

    // The original labels become real, keyboard-accessible buttons.
    const tabElements = Array.from(badges.querySelectorAll('.badge'));
    const tabs = tabElements.map((element, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = element.className;
      button.innerHTML = element.innerHTML;
      button.dataset.view = index === 0 ? 'consignes' : 'programme';
      button.setAttribute('role', 'tab');
      element.replaceWith(button);
      return button;
    });

    badges.setAttribute('role', 'tablist');
    badges.setAttribute('aria-label', `Contenu de l’activité ${assignment.querySelector('.assignment-title')?.textContent.trim()}`);

    const showView = view => {
      const showScratch = view === 'programme';
      tabs.forEach(tab => {
        const isActive = tab.dataset.view === view;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
        tab.tabIndex = 0;
      });

      wrapper.querySelectorAll('.scratch-secondary').forEach(frame => frame.remove());
      container.classList.toggle('scratch-view', showScratch);
      container.classList.toggle('scratch-multiple', showScratch && projectIds.length > 1);
      setLoading(true);

      if (showScratch) {
        const [firstProject, ...otherProjects] = projectIds;
        iframe.title = `Programme Scratch — ${assignment.querySelector('.assignment-title')?.textContent.trim()}`;
        iframe.src = `https://scratch.mit.edu/projects/${firstProject}/embed`;

        otherProjects.forEach((projectId, index) => {
          const secondFrame = document.createElement('iframe');
          secondFrame.className = 'embed-iframe scratch-secondary';
          secondFrame.src = `https://scratch.mit.edu/projects/${projectId}/embed`;
          secondFrame.title = `Programme Scratch ${index + 2} — ${assignment.querySelector('.assignment-title')?.textContent.trim()}`;
          secondFrame.allowFullscreen = true;
          wrapper.appendChild(secondFrame);
        });

        if (filenameTextNode) filenameTextNode.textContent = projectIds.length > 1
          ? ' Programmes Scratch'
          : ' Programme Scratch';
        if (openLink) {
          openLink.href = `https://scratch.mit.edu/projects/${firstProject}/`;
          openLink.title = 'Ouvrir dans Scratch';
          openLink.hidden = true;
        }
        if (openLinkTextNode) openLinkTextNode.textContent = ' Ouvrir dans Scratch';
        if (downloadLink) downloadLink.hidden = true;
      } else {
        iframe.title = `Consignes — ${assignment.querySelector('.assignment-title')?.textContent.trim()}`;
        iframe.src = pdfSrc;
        if (filenameTextNode) filenameTextNode.textContent = ` ${pdfFilename}`;
        if (openLink) {
          openLink.href = pdfOpenUrl;
          openLink.title = 'Agrandir';
          openLink.hidden = false;
        }
        if (openLinkTextNode) openLinkTextNode.textContent = ` ${pdfOpenLabel}`;
        if (downloadLink) downloadLink.hidden = false;
      }
    };

    tabs.forEach(tab => tab.addEventListener('click', () => showView(tab.dataset.view)));
    showView('consignes');

    if (pdfSrc && !iframe.getAttribute('src')) {
      iframe.src = pdfSrc;
    }
  };

  await loadAdditionalActivities();
  document.querySelectorAll('.embed-container').forEach(initializeEmbedContainer);
});
