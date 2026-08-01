document.addEventListener('DOMContentLoaded', () => {
  const defaults = {
    'cc-fr': 10,
    'cc-math': 10,
    'cc-hg': 10,
    'cc-emc': 10,
    'cc-lv1': 10,
    'cc-lv2': 10,
    'cc-arts': 10,
    'cc-music': 10,
    'cc-svt': 10,
    'cc-physics': 10,
    'cc-tech': 10,
    'cc-eps': 10,
    option: 10,
    fr: 10,
    math: 10,
    hg: 10,
    emc: 10,
    sci: 10,
    oral: 10
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  const getValue = id => clamp(Math.round(Number.parseFloat(document.getElementById(id).value)), 0, 20);
  const getLocale = () => ({
    en: 'en-US',
    es: 'es-ES',
    de: 'de-DE'
  })[window.i18n && window.i18n.getLanguage()] || 'fr-FR';
  const formatNumber = (value, minimumFractionDigits = 0) => value.toLocaleString(getLocale(), {
    minimumFractionDigits,
    maximumFractionDigits: 2
  });
  const roundToTenth = value => Math.round((value + Number.EPSILON) * 10) / 10;
  const formatAverage = value => roundToTenth(value).toFixed(1).replace('.', ',');
  const translate = (key, fallback, params) => window.i18n
    ? window.i18n.t(key, params)
    : fallback;
  const CALC_TEXT = {
    fr: {fr:'Français',math:'Mathématiques',history:'Histoire-géographie',emc:'EMC',lv1:'Langue vivante 1',lv2:'Langue vivante 2',arts:'Arts plastiques',music:'Éducation musicale',svt:'SVT',physics:'Physique-chimie',tech:'Technologie',eps:'EPS',science:'Sciences',oral:'Oral',option:'Option facultative',subject:'Matière',exam:'Épreuve',note:'Note /20',coef:'Coef.',optionNote:'Seuls les points au-dessus de 10/20 à l’option facultative sont ajoutés au total des 12 matières, puis ce total est divisé par 12.',capNote:'La moyenne de contrôle continu retenue ne peut pas dépasser 20/20.',average12:'Moyenne des 12 matières',retained:'Note de contrôle continu retenue',finalAverage:'Moyenne des épreuves finales',scienceNote:'Sciences : 2 disciplines sont évaluées parmi physique-chimie, SVT et technologie.',mention:'Mention',printSummary:'Récapitulatif de la simulation',edited:'Édité le',simulation:'Résultat de la simulation',disclaimer:'Simulation indicative réalisée avec La Salle 9.',admitted:'Admis',fair:'Assez bien',good:'Bien',veryGood:'Très bien',congrats:'Félicitations'},
    en: {fr:'French',math:'Mathematics',history:'History and geography',emc:'Civics',lv1:'Modern language 1',lv2:'Modern language 2',arts:'Visual arts',music:'Music',svt:'Life sciences',physics:'Physics and chemistry',tech:'Technology',eps:'Physical education',science:'Science',oral:'Oral exam',option:'Optional subject',subject:'Subject',exam:'Exam',note:'Score /20',coef:'Coeff.',optionNote:'Only points above 10/20 in the optional subject are added to the total for the 12 subjects, then divided by 12.',capNote:'The retained continuous-assessment average cannot exceed 20/20.',average12:'Average across 12 subjects',retained:'Retained continuous-assessment score',finalAverage:'Final-exam average',scienceNote:'Science: 2 subjects are assessed among physics and chemistry, life sciences, and technology.',mention:'Honors',printSummary:'Simulation summary',edited:'Edited on',simulation:'Simulation result',disclaimer:'Indicative simulation made with La Salle 9.',admitted:'Passed',fair:'Honors',good:'High honors',veryGood:'Highest honors',congrats:'Congratulations'},
    es: {fr:'Francés',math:'Matemáticas',history:'Geografía e historia',emc:'Educación cívica',lv1:'Lengua extranjera 1',lv2:'Lengua extranjera 2',arts:'Artes plásticas',music:'Educación musical',svt:'Ciencias de la vida',physics:'Física y química',tech:'Tecnología',eps:'Educación física',science:'Ciencias',oral:'Examen oral',option:'Asignatura optativa',subject:'Materia',exam:'Examen',note:'Nota /20',coef:'Coef.',optionNote:'Solo los puntos por encima de 10/20 en la asignatura optativa se añaden al total de las 12 materias, que después se divide entre 12.',capNote:'La media de evaluación continua no puede superar 20/20.',average12:'Media de las 12 materias',retained:'Nota de evaluación continua retenida',finalAverage:'Media de los exámenes finales',scienceNote:'Ciencias: se evalúan 2 disciplinas entre física y química, ciencias de la vida y tecnología.',mention:'Mención',printSummary:'Resumen de la simulación',edited:'Editado el',simulation:'Resultado de la simulación',disclaimer:'Simulación orientativa realizada con La Salle 9.',admitted:'Aprobado',fair:'Notable',good:'Sobresaliente',veryGood:'Matrícula de honor',congrats:'Felicitaciones'},
    de: {fr:'Französisch',math:'Mathematik',history:'Geschichte und Geografie',emc:'Staatsbürgerkunde',lv1:'Fremdsprache 1',lv2:'Fremdsprache 2',arts:'Bildende Kunst',music:'Musik',svt:'Biowissenschaften',physics:'Physik und Chemie',tech:'Technik',eps:'Sport',science:'Naturwissenschaften',oral:'Mündliche Prüfung',option:'Wahlfach',subject:'Fach',exam:'Prüfung',note:'Note /20',coef:'Koeff.',optionNote:'Nur Punkte über 10/20 im Wahlfach werden zur Summe der 12 Fächer addiert und anschließend durch 12 geteilt.',capNote:'Der berücksichtigte Durchschnitt der laufenden Bewertung darf 20/20 nicht überschreiten.',average12:'Durchschnitt der 12 Fächer',retained:'Berücksichtigte laufende Bewertung',finalAverage:'Durchschnitt der Abschlussprüfungen',scienceNote:'Naturwissenschaften: 2 Fächer aus Physik und Chemie, Biowissenschaften und Technik werden bewertet.',mention:'Auszeichnung',printSummary:'Zusammenfassung der Simulation',edited:'Bearbeitet am',simulation:'Simulationsergebnis',disclaimer:'Unverbindliche Simulation mit La Salle 9.',admitted:'Bestanden',fair:'Gut',good:'Sehr gut',veryGood:'Ausgezeichnet',congrats:'Glückwünsche'}
  };
  const calcText = key => CALC_TEXT[window.i18n?.getLanguage?.() || 'fr']?.[key] || CALC_TEXT.fr[key] || key;
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  const setLabelText = (selector, value) => { const node=document.querySelector(selector); if(!node)return; const textNode=[...node.childNodes].find(child=>child.nodeType===Node.TEXT_NODE); if(textNode)textNode.textContent=`${value} `; else node.insertBefore(document.createTextNode(`${value} `),node.firstChild); };
  const refreshCalculatorStaticText = () => {
    const labels = [['cc-fr','fr'],['cc-math','math'],['cc-hg','history'],['cc-emc','emc'],['cc-lv1','lv1'],['cc-lv2','lv2'],['cc-arts','arts'],['cc-music','music'],['cc-svt','svt'],['cc-physics','physics'],['cc-tech','tech'],['cc-eps','eps'],['option','option'],['fr','fr'],['math','math'],['hg','history'],['emc','emc'],['sci','science'],['oral','oral']];
    labels.forEach(([id,key]) => { const label=document.querySelector(`label[for="${id}"]`); if(label) label.textContent=calcText(key); });
    document.querySelectorAll('.continuous-head > div')[0]?.replaceChildren(calcText('subject'));
    document.querySelectorAll('.continuous-head > div')[1]?.replaceChildren(calcText('note'));
    document.querySelectorAll('.exam-head > div')[0]?.replaceChildren(calcText('exam'));
    document.querySelectorAll('.exam-head > div')[1]?.replaceChildren(calcText('note'));
    document.querySelectorAll('.exam-head > div')[2]?.replaceChildren(calcText('coef'));
    setText('.option-field label', calcText('option'));
    setText('.brevet-notes p:first-child', calcText('optionNote'));
    setText('.brevet-notes p:last-child', calcText('capNote'));
    setLabelText('.continuous-card .block-average', calcText('average12'));
    setLabelText('.retained-average span', calcText('retained'));
    setLabelText('.exam-card .retained-average', calcText('finalAverage'));
    setText('.science-note', calcText('scienceNote'));
    setText('#printSummary h1', translate('brevet.title', 'Simulateur Brevet'));
    setText('#printSummary h2:first-of-type', `1. ${translate('brevet.continuous_title', 'Contrôle continu')}`);
    setText('#printSummary h2:nth-of-type(2)', `2. ${translate('brevet.exams_title', 'Épreuves finales')}`);
    setText('#printSummary .print-result p', calcText('simulation'));
    const printSubjects=['fr','math','history','emc','lv1','lv2','arts','music','svt','physics','tech','eps','option'];
    document.querySelectorAll('#printSummary .print-summary-section:first-of-type tbody tr td:first-child').forEach((node,index)=>{if(printSubjects[index])node.textContent=calcText(printSubjects[index]);});
    const printExams=['fr','math','history','emc','science','oral'];
    document.querySelectorAll('#printSummary .print-summary-section:nth-of-type(2) tbody tr td:first-child').forEach((node,index)=>{if(printExams[index])node.textContent=calcText(printExams[index]);});
    setLabelText('.mention-box', calcText('mention'));
    const gaugeLabels=[['.gauge-label-10 span','admitted'],['.gauge-label-12 span','fair'],['.gauge-label-14 span','good'],['.gauge-label-16 span','veryGood'],['.gauge-label-18 span','congrats']];
    gaugeLabels.forEach(([selector,key])=>setText(selector,calcText(key)));
    setLabelText('.legend-admitted','10 '+calcText('admitted')); setLabelText('.legend-fair','12 '+calcText('fair')); setLabelText('.legend-good','14 '+calcText('good')); setLabelText('.legend-very-good','16 '+calcText('veryGood')); setLabelText('.legend-congrats','18 '+calcText('congrats'));
    setText('.print-summary-header p', calcText('printSummary')); setText('.print-disclaimer',calcText('disclaimer'));
  };
  const mentionThresholds = [
    { score: 10, label: 'être admis' },
    { score: 12, label: 'obtenir la mention Assez bien' },
    { score: 14, label: 'obtenir la mention Bien' },
    { score: 16, label: 'obtenir la mention Très bien' },
    { score: 18, label: 'obtenir les félicitations du jury' }
  ];

  const syncPrintSummary = () => {
    Object.keys(defaults).forEach(id => {
      const output = document.getElementById(`print-${id}`);
      if (output) output.textContent = `${getValue(id)} / 20`;
    });
    document.getElementById('printContinuous').textContent = document.getElementById('continuousRetained').textContent;
    document.getElementById('printExam').textContent = document.getElementById('examAverage').textContent;
    document.getElementById('printFinalScore').textContent = document.getElementById('finalScore').textContent;
    document.getElementById('printStatus').textContent = document.getElementById('status').textContent;
    document.getElementById('printMention').textContent = document.getElementById('mention').textContent;
    document.getElementById('printDate').textContent = new Intl.DateTimeFormat(getLocale()).format(new Date());
  };

  const calculate = () => {
    const continuousGrades = [...document.querySelectorAll('.continuous-input')]
      .map(input => getValue(input.id));
    const continuousBase = continuousGrades.reduce((total, grade) => total + grade, 0) / continuousGrades.length;
    const optionBonus = Math.max(0, getValue('option') - 10);
    // La moyenne annuelle représente les 12 matières : le bonus d'option
    // s'ajoute à leur total de points avant la division par 12.
    const continuousScore = Math.min(20, continuousBase + optionBonus / 12);
    const weightedExams =
      getValue('fr') * 2 +
      getValue('math') * 2 +
      getValue('hg') * 1.5 +
      getValue('emc') * 0.5 +
      getValue('sci') * 2 +
      getValue('oral') * 2;
    const examAverage = weightedExams / 10;
    const finalScore = continuousScore * 0.4 + examAverage * 0.6;
    const roundedFinalScore = roundToTenth(finalScore);
    const admitted = roundedFinalScore >= 10;

    let mention = window.i18n ? window.i18n.t('brevet.mention_ajourne') : 'Non admis';
    if (roundedFinalScore >= 18) mention = window.i18n ? window.i18n.t('brevet.mention_tb') + ' — ' + window.i18n.t('brevet.felicitations', 'Félicitations du jury') : 'Très bien — Félicitations du jury';
    else if (roundedFinalScore >= 16) mention = window.i18n ? window.i18n.t('brevet.mention_tb') : 'Très bien';
    else if (roundedFinalScore >= 14) mention = window.i18n ? window.i18n.t('brevet.mention_b') : 'Bien';
    else if (roundedFinalScore >= 12) mention = window.i18n ? window.i18n.t('brevet.mention_ab') : 'Assez bien';
    else if (admitted) mention = window.i18n ? window.i18n.t('brevet.mention_admis') : 'Admis';

    document.getElementById('finalScore').textContent = `${roundedFinalScore.toLocaleString(getLocale(), {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} / 20`;
    document.getElementById('continuousAverage').textContent = `${formatAverage(continuousBase)} / 20`;
    document.getElementById('continuousRetained').textContent = `${formatAverage(continuousScore)} / 20`;
    document.getElementById('continuousDetails').textContent =
      `(${formatNumber(continuousGrades.reduce((total, grade) => total + grade, 0))} + ${formatNumber(optionBonus)}) ÷ 12`;
    document.getElementById('examAverage').textContent = `${formatAverage(examAverage)} / 20`;

    const status = document.getElementById('status');
    const mentionBox = document.getElementById('mentionBox');
    const admittedText = window.i18n ? window.i18n.t('brevet.mention_admis') : 'Admis';
    const notAdmittedText = window.i18n ? window.i18n.t('brevet.mention_ajourne') : 'Non admis';
    status.textContent = admitted ? `✓ ${admittedText}` : `✕ ${notAdmittedText}`;
    status.classList.toggle('fail', !admitted);
    mentionBox.classList.toggle('fail', !admitted);
    document.getElementById('mention').textContent = mention;

    const gauge = document.getElementById('scoreGauge');
    const gaugePosition = clamp(roundedFinalScore / 20 * 100, 0, 100);
    gauge.style.setProperty('--score-position', `${gaugePosition}%`);
    gauge.setAttribute('aria-valuenow', roundedFinalScore);
    gauge.setAttribute('aria-valuetext', `${formatAverage(roundedFinalScore)} sur 20, ${mention}`);

    const nextThreshold = mentionThresholds.find(threshold => roundedFinalScore < threshold.score);
    const nextMention = document.getElementById('nextMention');
    if (nextThreshold) {
      const missingPoints = roundToTenth(nextThreshold.score - roundedFinalScore);
      const minimumDecimals = Number.isInteger(missingPoints) ? 0 : 1;
      nextMention.textContent = `Encore ${formatNumber(missingPoints, minimumDecimals)} ${missingPoints === 1 ? 'point' : 'points'} pour ${nextThreshold.label}`;
      nextMention.classList.remove('maximum');
    } else {
      nextMention.textContent = window.i18n ? window.i18n.t('brevet.max_reached', 'Niveau maximal atteint : félicitations du jury !') : 'Niveau maximal atteint : félicitations du jury !';
      nextMention.classList.add('maximum');
    }
    syncPrintSummary();
  };

  document.querySelectorAll('.calc-input').forEach(input => {
    input.addEventListener('input', calculate);
    input.addEventListener('change', () => {
      input.value = getValue(input.id);
      calculate();
    });
  });
  document.getElementById('reset').addEventListener('click', () => {
    Object.entries(defaults).forEach(([id, value]) => {
      document.getElementById(id).value = value;
    });
    calculate();
  });
  document.getElementById('exportPdf').addEventListener('click', () => {
    calculate();
    window.print();
  });
  window.addEventListener('beforeprint', calculate);
  const refreshCalculatorLanguage = () => {
    refreshCalculatorStaticText();
    calculate();
    const total = [...document.querySelectorAll('.continuous-input')]
      .reduce((sum, input) => sum + getValue(input.id), 0);
    const bonus = Math.max(0, getValue('option') - 10);
    const details = document.getElementById('continuousDetails');
    if (details) details.textContent = translate('brevet.continuous_details', '({total} + {bonus}) ÷ 12', {
      total: formatNumber(total), bonus: formatNumber(bonus)
    });
    const finalScore = roundToTenth(
      (Math.min(20, total / 12 + bonus / 12) * 0.4) +
      ((getValue('fr') * 2 + getValue('math') * 2 + getValue('hg') * 1.5 + getValue('emc') * 0.5 + getValue('sci') * 2 + getValue('oral') * 2) / 10) * 0.6
    );
    const next = [
      [10, 'brevet.mention_admis'], [12, 'brevet.mention_ab'],
      [14, 'brevet.mention_b'], [16, 'brevet.mention_tb'], [18, 'brevet.felicitations']
    ].find(([score]) => finalScore < score);
    const nextMention = document.getElementById('nextMention');
    if (nextMention && next) {
      const missing = roundToTenth(next[0] - finalScore);
      const unit = missing === 1 ? translate('brevet.point', 'point') : translate('brevet.points', 'points');
      nextMention.textContent = translate('brevet.next_score', 'Encore {points} {unit} pour {mention}', {
        points: formatNumber(missing, Number.isInteger(missing) ? 0 : 1),
        unit,
        mention: translate(next[1], 'la mention suivante')
      });
    }
  };

  window.addEventListener('langchange', refreshCalculatorLanguage);

  refreshCalculatorLanguage();
});
