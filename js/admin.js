(() => {
  'use strict';

  const CONFIG = {
    owner: 'arnocollet',
    repository: 'La-salle-9-augmented',
    branch: 'main',
    dataPath: 'data/activities.json',
    apiVersion: '2026-03-10',
    tokenStorageKey: 'lasalle9_admin_github_token',
    maxPdfBytes: 20 * 1024 * 1024
  };

  const state = {
    token: '',
    user: null,
    activities: [],
    dataSha: '',
    editingId: null
  };

  const elements = {
    loginPanel: document.querySelector('#login-panel'),
    loginForm: document.querySelector('#login-form'),
    loginStatus: document.querySelector('#login-status'),
    token: document.querySelector('#token'),
    rememberToken: document.querySelector('#remember-token'),
    toggleToken: document.querySelector('#toggle-token'),
    logout: document.querySelector('#logout-btn'),
    app: document.querySelector('#admin-app'),
    connectionBadge: document.querySelector('#connection-badge'),
    editorTitle: document.querySelector('#editor-title'),
    editorDescription: document.querySelector('#editor-description'),
    editorPanel: document.querySelector('.editor-panel'),
    form: document.querySelector('#activity-form'),
    publishButton: document.querySelector('#publish-btn'),
    cancelEdit: document.querySelector('#cancel-edit-btn'),
    publishStatus: document.querySelector('#publish-status'),
    pdfInput: document.querySelector('#pdf-file'),
    pdfUrl: document.querySelector('#pdf-url'),
    currentPdf: document.querySelector('#current-pdf'),
    dropzone: document.querySelector('#pdf-dropzone'),
    pdfFileName: document.querySelector('#pdf-file-name'),
    list: document.querySelector('#activities-list'),
    empty: document.querySelector('#empty-activities'),
    refresh: document.querySelector('#refresh-btn')
  };

  const setStatus = (element, message = '', type = '') => {
    element.textContent = message;
    element.classList.toggle('is-error', type === 'error');
    element.classList.toggle('is-success', type === 'success');
  };

  const setBusy = (button, busy, busyLabel) => {
    if (!button.dataset.defaultLabel) button.dataset.defaultLabel = button.textContent.trim();
    button.disabled = busy;
    if (busy) button.textContent = busyLabel;
    else button.textContent = button.dataset.defaultLabel;
  };

  const friendlyApiError = (status, message) => {
    if (status === 401) return 'Jeton invalide ou expiré.';
    if (status === 403) return 'Le jeton ne possède pas la permission « Contents: Read and write » sur ce dépôt.';
    if (status === 404) return 'Dépôt ou fichier introuvable. Vérifiez que le jeton autorise ce dépôt.';
    if (status === 409) return 'Le dépôt a changé pendant l’opération. Actualisez puis réessayez.';
    if (status === 422) return `GitHub a refusé les données : ${message}`;
    return message || `Erreur GitHub (${status}).`;
  };

  const githubRequest = async (path, options = {}) => {
    const response = await fetch(`https://api.github.com${path}`, {
      ...options,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${state.token}`,
        'X-GitHub-Api-Version': CONFIG.apiVersion,
        ...(options.headers || {})
      }
    });

    if (!response.ok) {
      let payload = {};
      try { payload = await response.json(); } catch { /* Response without JSON. */ }
      throw new Error(friendlyApiError(response.status, payload.message));
    }

    return response.status === 204 ? null : response.json();
  };

  const contentApiPath = path => `/repos/${CONFIG.owner}/${CONFIG.repository}/contents/${path
    .split('/')
    .map(encodeURIComponent)
    .join('/')}`;

  const bytesToBase64 = bytes => {
    let binary = '';
    const chunkSize = 0x8000;
    for (let index = 0; index < bytes.length; index += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
    }
    return btoa(binary);
  };

  const textToBase64 = text => bytesToBase64(new TextEncoder().encode(text));

  const base64ToText = value => {
    const binary = atob(value.replace(/\s/g, ''));
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  };

  const getActivitiesFile = async () => {
    const file = await githubRequest(`${contentApiPath(CONFIG.dataPath)}?ref=${encodeURIComponent(CONFIG.branch)}`);
    const activities = JSON.parse(base64ToText(file.content));
    if (!Array.isArray(activities)) throw new Error('Le fichier des activités est invalide.');
    state.activities = activities;
    state.dataSha = file.sha;
    return activities;
  };

  const putContent = (path, base64Content, message, sha = '') => githubRequest(contentApiPath(path), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      content: base64Content,
      branch: CONFIG.branch,
      ...(sha ? { sha } : {})
    })
  });

  const saveActivities = async (activities, message, sha) => {
    const json = `${JSON.stringify(activities, null, 2)}\n`;
    await putContent(CONFIG.dataPath, textToBase64(json), message, sha);
    state.activities = activities;
    await getActivitiesFile();
  };

  const slugify = value => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 70) || 'activite';

  const validateHttpUrl = (value, label) => {
    try {
      const url = new URL(value);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
      return url.href;
    } catch {
      throw new Error(`${label} n’est pas un lien web valide.`);
    }
  };

  const getScratchId = value => {
    const url = validateHttpUrl(value, 'Le lien Scratch');
    const parsed = new URL(url);
    const match = parsed.hostname === 'scratch.mit.edu' && parsed.pathname.match(/^\/projects\/(\d+)/);
    if (!match) throw new Error('Utilisez un lien de projet de la forme https://scratch.mit.edu/projects/123456789/.');
    return match[1];
  };

  const validatePdf = file => {
    const isPdf = file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf';
    if (!isPdf) throw new Error('Le fichier déposé doit être un PDF.');
    if (file.size > CONFIG.maxPdfBytes) throw new Error('Le PDF dépasse la limite de 20 Mo.');
  };

  const setSelectedPdf = file => {
    elements.dropzone.classList.toggle('has-file', Boolean(file));
    elements.pdfFileName.textContent = file
      ? `${file.name} — ${(file.size / (1024 * 1024)).toFixed(1)} Mo`
      : 'PDF uniquement — 20 Mo maximum';
    if (state.editingId && elements.currentPdf.textContent) {
      elements.currentPdf.hidden = Boolean(file || elements.pdfUrl.value.trim());
    }
  };

  const gradeLabel = grade => ({ '3e': '3ème', '4e': '4ème', '5e': '5ème' }[grade] || grade);

  const resetEditor = (clearStatus = false) => {
    state.editingId = null;
    elements.form.reset();
    setSelectedPdf(null);
    elements.currentPdf.hidden = true;
    elements.currentPdf.textContent = '';
    elements.editorTitle.textContent = 'Ajouter une activité';
    elements.editorDescription.textContent = 'Remplissez les quatre informations puis publiez. GitHub Pages fera le reste.';
    elements.publishButton.textContent = 'Publier l’activité';
    elements.publishButton.dataset.defaultLabel = 'Publier l’activité';
    elements.cancelEdit.hidden = true;
    elements.editorPanel.classList.remove('is-editing');
    if (clearStatus) setStatus(elements.publishStatus);
  };

  const editActivity = id => {
    const activity = state.activities.find(item => item.id === id);
    if (!activity) {
      setStatus(elements.publishStatus, 'Cette activité n’existe plus. Actualisez la liste.', 'error');
      return;
    }

    state.editingId = id;
    elements.form.elements.grade.value = activity.grade;
    elements.form.elements.emoji.value = activity.emoji || '💻';
    elements.form.elements.title.value = activity.title || '';
    elements.form.elements.scratchUrl.value = activity.scratchId
      ? `https://scratch.mit.edu/projects/${activity.scratchId}/`
      : '';
    elements.pdfUrl.value = /^https?:\/\//i.test(activity.pdfUrl || '') ? activity.pdfUrl : '';
    elements.pdfInput.value = '';
    setSelectedPdf(null);
    elements.currentPdf.textContent = `PDF actuel conservé : ${activity.pdfName || activity.pdfUrl || 'document existant'}`;
    elements.currentPdf.hidden = false;
    elements.editorTitle.textContent = 'Modifier une activité';
    elements.editorDescription.textContent = 'Modifiez les informations souhaitées puis enregistrez. Le PDF actuel reste utilisé si vous n’en choisissez pas un nouveau.';
    elements.publishButton.textContent = 'Enregistrer les modifications';
    elements.publishButton.dataset.defaultLabel = 'Enregistrer les modifications';
    elements.cancelEdit.hidden = false;
    elements.editorPanel.classList.add('is-editing');
    setStatus(elements.publishStatus, `Modification de « ${activity.title} ».`);
    elements.editorPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    elements.form.elements.title.focus({ preventScroll: true });
  };

  const renderActivities = () => {
    elements.list.replaceChildren();
    elements.empty.hidden = state.activities.length > 0;

    [...state.activities]
      .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
      .forEach(activity => {
        const row = document.createElement('article');
        row.className = `admin-activity${activity.active === false ? ' is-inactive' : ''}`;

        const icon = document.createElement('div');
        icon.className = 'admin-activity-icon';
        icon.textContent = activity.emoji || '💻';

        const info = document.createElement('div');
        info.className = 'admin-activity-info';
        const title = document.createElement('p');
        title.className = 'admin-activity-title';
        title.textContent = activity.title;
        const meta = document.createElement('p');
        meta.className = 'admin-activity-meta';
        meta.textContent = `Classe de ${gradeLabel(activity.grade)} · ${activity.active === false ? 'Masquée' : 'Visible'}`;
        info.append(title, meta);

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'button button-quiet';
        toggle.textContent = activity.active === false ? 'Réactiver' : 'Masquer';
        toggle.addEventListener('click', () => toggleActivity(activity.id, toggle));

        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'button button-quiet button-edit';
        edit.textContent = 'Modifier';
        edit.addEventListener('click', () => editActivity(activity.id));

        const actions = document.createElement('div');
        actions.className = 'admin-activity-actions';
        actions.append(edit, toggle);

        row.append(icon, info, actions);
        elements.list.appendChild(row);
      });
  };

  const refreshActivities = async (showMessage = true) => {
    if (showMessage) setStatus(elements.publishStatus, 'Actualisation…');
    await getActivitiesFile();
    renderActivities();
    if (showMessage) setStatus(elements.publishStatus, 'Liste actualisée.', 'success');
  };

  const connect = async (token, remember) => {
    state.token = token.trim();
    if (!state.token) throw new Error('Saisissez votre jeton GitHub.');

    const user = await githubRequest('/user');
    state.user = user;
    await getActivitiesFile();

    if (remember) localStorage.setItem(CONFIG.tokenStorageKey, state.token);
    else localStorage.removeItem(CONFIG.tokenStorageKey);

    elements.loginPanel.hidden = true;
    elements.app.hidden = false;
    elements.logout.hidden = false;
    elements.connectionBadge.textContent = `Connecté : ${user.login}`;
    renderActivities();
  };

  const disconnect = () => {
    localStorage.removeItem(CONFIG.tokenStorageKey);
    state.token = '';
    state.user = null;
    state.activities = [];
    resetEditor(true);
    elements.token.value = '';
    elements.app.hidden = true;
    elements.logout.hidden = true;
    elements.loginPanel.hidden = false;
    setStatus(elements.loginStatus, 'Jeton supprimé de cet appareil.', 'success');
  };

  const toggleActivity = async (id, button) => {
    setBusy(button, true, 'Enregistrement…');
    setStatus(elements.publishStatus, 'Mise à jour de l’activité…');

    try {
      const activities = await getActivitiesFile();
      const target = activities.find(activity => activity.id === id);
      if (!target) throw new Error('Cette activité n’existe plus.');
      target.active = target.active === false;
      target.updatedAt = new Date().toISOString();
      await saveActivities(activities, `${target.active ? 'Réactive' : 'Masque'} l’activité ${target.title}`, state.dataSha);
      renderActivities();
      setStatus(elements.publishStatus, 'Modification publiée. Le site sera actualisé dans quelques instants.', 'success');
    } catch (error) {
      setStatus(elements.publishStatus, error.message, 'error');
    } finally {
      setBusy(button, false);
    }
  };

  const saveActivity = async form => {
    const editingId = state.editingId;
    const formData = new FormData(form);
    const grade = formData.get('grade');
    const emoji = formData.get('emoji');
    const title = String(formData.get('title') || '').trim();
    const scratchId = getScratchId(String(formData.get('scratchUrl') || '').trim());
    const pdfFile = elements.pdfInput.files[0];
    const pdfLink = String(formData.get('pdfUrl') || '').trim();

    if (!['3e', '4e', '5e'].includes(grade)) throw new Error('Sélectionnez une classe.');
    if (!title) throw new Error('Saisissez le titre de l’activité.');
    const editedActivity = editingId
      ? state.activities.find(activity => activity.id === editingId)
      : null;
    if (editingId && !editedActivity) throw new Error('Cette activité n’existe plus. Actualisez la liste.');
    if (!pdfFile && !pdfLink && !editedActivity?.pdfUrl) throw new Error('Déposez un PDF ou indiquez son lien.');

    let pdfUrl;
    let pdfName;

    if (pdfFile) {
      validatePdf(pdfFile);
      const filePath = `assets/pdfs/${slugify(title)}-${Date.now()}.pdf`;
      const fileBytes = new Uint8Array(await pdfFile.arrayBuffer());
      await putContent(filePath, bytesToBase64(fileBytes), `Ajoute le PDF de l’activité ${title}`);
      pdfUrl = filePath;
      pdfName = pdfFile.name;
    } else if (pdfLink) {
      pdfUrl = validateHttpUrl(pdfLink, 'Le lien PDF');
      try {
        pdfName = decodeURIComponent(new URL(pdfUrl).pathname.split('/').pop()) || 'Consignes.pdf';
      } catch {
        pdfName = 'Consignes.pdf';
      }
    } else {
      pdfUrl = editedActivity.pdfUrl;
      pdfName = editedActivity.pdfName;
    }

    // Reload after a possible PDF commit to minimize update conflicts.
    const activities = await getActivitiesFile();
    const now = new Date().toISOString();
    if (editingId) {
      const target = activities.find(activity => activity.id === editingId);
      if (!target) throw new Error('Cette activité n’existe plus. Actualisez la liste.');
      Object.assign(target, { grade, title, emoji, pdfUrl, pdfName, scratchId, updatedAt: now });
      await saveActivities(activities, `Modifie l’activité ${title} en ${grade}`, state.dataSha);
      return 'updated';
    }

    activities.push({
      id: `${grade}-${slugify(title)}-${Date.now()}`,
      grade,
      title,
      emoji,
      pdfUrl,
      pdfName,
      scratchId,
      active: true,
      createdAt: now,
      updatedAt: now
    });

    await saveActivities(activities, `Ajoute l’activité ${title} en ${grade}`, state.dataSha);
    return 'created';
  };

  elements.loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    const submit = elements.loginForm.querySelector('button[type="submit"]');
    setBusy(submit, true, 'Connexion…');
    setStatus(elements.loginStatus, 'Vérification du jeton…');

    try {
      await connect(elements.token.value, elements.rememberToken.checked);
      setStatus(elements.loginStatus);
    } catch (error) {
      state.token = '';
      setStatus(elements.loginStatus, error.message, 'error');
    } finally {
      setBusy(submit, false);
    }
  });

  elements.form.addEventListener('submit', async event => {
    event.preventDefault();
    const isEditing = Boolean(state.editingId);
    setBusy(elements.publishButton, true, isEditing ? 'Enregistrement…' : 'Publication…');
    elements.cancelEdit.disabled = true;
    setStatus(elements.publishStatus, isEditing ? 'Mise à jour sur GitHub…' : 'Envoi des fichiers vers GitHub…');

    try {
      const result = await saveActivity(elements.form);
      resetEditor();
      renderActivities();
      setStatus(
        elements.publishStatus,
        result === 'updated'
          ? 'Activité mise à jour ! GitHub Pages sera actualisé dans une à deux minutes.'
          : 'Activité publiée ! GitHub Pages sera actualisé dans une à deux minutes.',
        'success'
      );
    } catch (error) {
      setStatus(elements.publishStatus, error.message, 'error');
    } finally {
      setBusy(elements.publishButton, false);
      elements.cancelEdit.disabled = false;
    }
  });

  elements.toggleToken.addEventListener('click', () => {
    const visible = elements.token.type === 'text';
    elements.token.type = visible ? 'password' : 'text';
    elements.toggleToken.setAttribute('aria-label', visible ? 'Afficher le jeton' : 'Masquer le jeton');
  });

  elements.pdfInput.addEventListener('change', () => setSelectedPdf(elements.pdfInput.files[0] || null));
  elements.pdfUrl.addEventListener('input', () => {
    if (state.editingId && elements.currentPdf.textContent) {
      elements.currentPdf.hidden = Boolean(elements.pdfUrl.value.trim() || elements.pdfInput.files[0]);
    }
  });
  elements.cancelEdit.addEventListener('click', () => resetEditor(true));

  ['dragenter', 'dragover'].forEach(type => elements.dropzone.addEventListener(type, event => {
    event.preventDefault();
    elements.dropzone.classList.add('is-dragging');
  }));

  ['dragleave', 'drop'].forEach(type => elements.dropzone.addEventListener(type, event => {
    event.preventDefault();
    elements.dropzone.classList.remove('is-dragging');
  }));

  elements.dropzone.addEventListener('drop', event => {
    const file = Array.from(event.dataTransfer.files).find(candidate => candidate.name.toLowerCase().endsWith('.pdf'));
    if (!file) {
      setStatus(elements.publishStatus, 'Déposez un fichier PDF.', 'error');
      return;
    }
    const transfer = new DataTransfer();
    transfer.items.add(file);
    elements.pdfInput.files = transfer.files;
    setSelectedPdf(file);
  });

  elements.logout.addEventListener('click', disconnect);
  elements.refresh.addEventListener('click', async () => {
    setBusy(elements.refresh, true, 'Actualisation…');
    try { await refreshActivities(); }
    catch (error) { setStatus(elements.publishStatus, error.message, 'error'); }
    finally { setBusy(elements.refresh, false); }
  });

  const savedToken = localStorage.getItem(CONFIG.tokenStorageKey);
  if (savedToken) {
    elements.token.value = savedToken;
    setStatus(elements.loginStatus, 'Connexion automatique…');
    connect(savedToken, true)
      .then(() => setStatus(elements.loginStatus))
      .catch(error => {
        localStorage.removeItem(CONFIG.tokenStorageKey);
        state.token = '';
        setStatus(elements.loginStatus, `${error.message} Saisissez un nouveau jeton.`, 'error');
      });
  }
})();
