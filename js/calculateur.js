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
  const formatNumber = (value, minimumFractionDigits = 0) => value.toLocaleString('fr-FR', {
    minimumFractionDigits,
    maximumFractionDigits: 2
  });
  const roundToTenth = value => Math.round((value + Number.EPSILON) * 10) / 10;
  const formatAverage = value => roundToTenth(value).toFixed(1).replace('.', ',');

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
    document.getElementById('continuousRetained').textContent = `${formatAverage(continuousScore)} / 20`;
    document.getElementById('continuousDetails').textContent =
      `(${formatNumber(continuousGrades.reduce((total, grade) => total + grade, 0))} + ${formatNumber(optionBonus)}) ÷ 12`;
    document.getElementById('examAverage').textContent = `${formatAverage(examAverage)} / 20`;

    const status = document.getElementById('status');
    const mentionBox = document.getElementById('mentionBox');
    status.textContent = admitted ? '✓ Admis' : '✕ Non admis';
    status.classList.toggle('fail', !admitted);
    mentionBox.classList.toggle('fail', !admitted);
    document.getElementById('mention').textContent = mention;
    document.getElementById('details').textContent =
      `Moyenne des 12 matières : ${formatAverage(continuousBase)}/20 — Note de contrôle continu retenue : ${formatAverage(continuousScore)}/20 — Moyenne des épreuves : ${formatAverage(examAverage)}/20`;
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

  calculate();
});
