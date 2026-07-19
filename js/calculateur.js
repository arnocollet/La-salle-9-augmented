document.addEventListener('DOMContentLoaded', () => {
  const defaults = {
    'cc-fr': 13,
    'cc-math': 13,
    'cc-hg': 13,
    'cc-emc': 13,
    'cc-lv1': 13,
    'cc-lv2': 13,
    'cc-arts': 13,
    'cc-music': 13,
    'cc-svt': 13,
    'cc-physics': 13,
    'cc-tech': 13,
    'cc-eps': 13,
    option: 12,
    fr: 14,
    math: 13,
    hg: 15,
    emc: 14,
    sci: 14,
    oral: 15
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  const getValue = id => clamp(Math.round(Number.parseFloat(document.getElementById(id).value)), 0, 20);
  const formatNumber = (value, minimumFractionDigits = 0) => value.toLocaleString('fr-FR', {
    minimumFractionDigits,
    maximumFractionDigits: 2
  });
  const formatAverage = value => value.toLocaleString('fr-FR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });

  const calculate = () => {
    const continuousGrades = [...document.querySelectorAll('.continuous-input')]
      .map(input => getValue(input.id));
    const continuousBase = continuousGrades.reduce((total, grade) => total + grade, 0) / continuousGrades.length;
    const optionBonus = Math.max(0, getValue('option') - 10);
    const continuousScore = Math.min(20, continuousBase + optionBonus);
    const weightedExams =
      getValue('fr') * 2 +
      getValue('math') * 2 +
      getValue('hg') * 1.5 +
      getValue('emc') * 0.5 +
      getValue('sci') * 2 +
      getValue('oral') * 2;
    const examAverage = weightedExams / 10;
    const finalScore = continuousScore * 0.4 + examAverage * 0.6;
    const roundedFinalScore = Math.round((finalScore + Number.EPSILON) * 10) / 10;
    const admitted = roundedFinalScore >= 10;

    let mention = 'Non admis';
    if (roundedFinalScore >= 18) mention = 'Très bien — Félicitations du jury';
    else if (roundedFinalScore >= 16) mention = 'Très bien';
    else if (roundedFinalScore >= 14) mention = 'Bien';
    else if (roundedFinalScore >= 12) mention = 'Assez bien';
    else if (admitted) mention = 'Admis';

    document.getElementById('finalScore').textContent = `${roundedFinalScore.toLocaleString('fr-FR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} / 20`;
    document.getElementById('continuousAverage').textContent = `${formatAverage(continuousBase)} / 20`;
    document.getElementById('examAverage').textContent = `${formatAverage(examAverage)} / 20`;

    const status = document.getElementById('status');
    const mentionBox = document.getElementById('mentionBox');
    status.textContent = admitted ? '✓ Admis' : '✕ Non admis';
    status.classList.toggle('fail', !admitted);
    mentionBox.classList.toggle('fail', !admitted);
    document.getElementById('mention').textContent = mention;
    document.getElementById('details').textContent =
      `Moyenne des 12 matières : ${formatNumber(continuousBase)}/20 — Contrôle continu retenu : ${formatNumber(continuousScore)}/20 — Moyenne des épreuves : ${formatNumber(examAverage)}/20`;
  };

  document.querySelectorAll('.calc-input').forEach(input => {
    input.addEventListener('input', calculate);
    input.addEventListener('change', () => {
      input.value = getValue(input.id);
      calculate();
    });
  });
  document.getElementById('calculate').addEventListener('click', calculate);
  document.getElementById('reset').addEventListener('click', () => {
    Object.entries(defaults).forEach(([id, value]) => {
      document.getElementById(id).value = value;
    });
    calculate();
  });

  calculate();
});
