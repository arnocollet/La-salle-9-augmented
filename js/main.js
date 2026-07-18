document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // Theme Management (Dark / Light Mode)
  // ==========================================================================
  const themeToggleBtn = document.querySelector('.theme-toggle');
  
  // Retrieve saved theme or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Update HTML attribute and save preference
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
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

  const embedContainers = document.querySelectorAll('.embed-container');

  embedContainers.forEach(container => {
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
    const projectIds = scratchProjects[assignment.id] || [];

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
  });
});
