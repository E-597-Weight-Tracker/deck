import { reportDays } from './report-data.js';

const NS = 'http://www.w3.org/2000/svg';
const WIDTH = 960;
const LEFT = 48;
const RIGHT = 28;
const step = (WIDTH - LEFT - RIGHT) / reportDays.length;
const x = index => LEFT + step * (index + .5);
const mean = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;

function element(parent, tag, attrs, value) {
  const node = document.createElementNS(NS, tag);
  Object.entries(attrs).forEach(([key, val]) => node.setAttribute(key, val));
  if (value !== undefined) node.textContent = value;
  parent.append(node);
  return node;
}

function frame(svg, top, bottom, ticks, y) {
  ticks.forEach(value => {
    element(svg, 'line', { x1: LEFT, x2: WIDTH - RIGHT, y1: y(value), y2: y(value), class: 'grid' });
    element(svg, 'text', { x: LEFT - 9, y: y(value) + 3.5, 'text-anchor': 'end', class: 'axis-label' }, String(value));
  });
  reportDays.forEach((day, index) => {
    element(svg, 'line', { x1: x(index), x2: x(index), y1: top, y2: bottom, class: 'grid' });
    element(svg, 'text', { x: x(index), y: bottom + 15, 'text-anchor': 'middle', class: 'axis-label' }, index + 1);
  });
  element(svg, 'text', { x: LEFT - 9, y: bottom + 15, 'text-anchor': 'end', class: 'axis-label' }, 'Sep');
}

const bpSvg = document.querySelector('#bp-chart');
const bpTop = 20, bpBottom = 240;
const bpAll = reportDays.flatMap(day => day.bloodPressure);
const bpMin = Math.floor((Math.min(...bpAll.map(r => r.diastolic)) - 5) / 20) * 20;
const bpMax = Math.ceil((Math.max(...bpAll.map(r => r.systolic)) + 5) / 20) * 20;
const bpY = value => bpBottom - (value - bpMin) / (bpMax - bpMin) * (bpBottom - bpTop);
const bpTicks = Array.from({ length: (bpMax - bpMin) / 20 + 1 }, (_, i) => bpMin + i * 20);
frame(bpSvg, bpTop, bpBottom, bpTicks, bpY);
const bpMarks = element(bpSvg, 'g', { 'data-bp-marks': '' });
const dailyBloodPressure = reportDays.map((day, index) => ({
  index,
  sys: mean(day.bloodPressure.map(r => r.systolic)),
  dia: mean(day.bloodPressure.map(r => r.diastolic))
})).filter(day => day.sys !== null && day.dia !== null);
const barDescription = document.querySelector('#bp-chart-desc').textContent;

function renderBloodPressure(asLines) {
  bpMarks.replaceChildren();
  bpSvg.dataset.mode = asLines ? 'lines' : 'bars';
  document.querySelector('#bp-legend').hidden = !asLines;
  document.querySelector('#bp-chart-desc').textContent = asLines
    ? 'Daily-average systolic is a solid line with round points; diastolic is a solid line with square points. Values are labeled in mmHg. Lines connect recorded days across missing days, which have no points or value labels.'
    : barDescription;
  if (asLines) {
    // Like weight, connect recorded dates across gaps without inventing markers.
    for (const [key, color] of [['sys', '#344e4e'], ['dia', '#0b7979']]) {
      const d = dailyBloodPressure.map((day, i) => `${i ? 'L' : 'M'}${x(day.index)},${bpY(day[key])}`).join(' ');
      element(bpMarks, 'path', { d, fill: 'none', stroke: color, 'stroke-width': 1.8, 'data-bp-line': key });
    }
  }
  dailyBloodPressure.forEach(({ index, sys, dia }) => {
    const group = element(bpMarks, 'g', { 'data-bp-day': index + 1, 'data-systolic': sys, 'data-diastolic': dia });
    element(group, 'title', {}, `September ${index + 1}: average ${sys}/${dia} mmHg`);
    if (asLines) {
      element(group, 'circle', { cx: x(index), cy: bpY(sys), r: 2.7, fill: '#344e4e', 'data-bp-point': 'sys' });
      element(group, 'rect', { x: x(index) - 2.7, y: bpY(dia) - 2.7, width: 5.4, height: 5.4, fill: '#0b7979', 'data-bp-point': 'dia' });
    } else {
      element(group, 'rect', { x: x(index) - 3.5, y: bpY(sys), width: 7, height: bpY(dia) - bpY(sys), fill: '#344e4e', 'data-bp-bar': '' });
      [sys, dia].forEach(value => element(group, 'line', { x1: x(index) - 6, x2: x(index) + 6, y1: bpY(value), y2: bpY(value), stroke: '#253434', 'stroke-width': 1.2 }));
    }
    element(group, 'text', { x: x(index), y: bpY(sys) - 8, 'text-anchor': 'middle', class: 'average-label', 'data-average': 'systolic' }, Math.round(sys));
    element(group, 'text', { x: x(index), y: bpY(dia) + 17, 'text-anchor': 'middle', class: 'average-label', 'data-average': 'diastolic' }, Math.round(dia));
  });
}
renderBloodPressure(false);
const bpToggle = document.querySelector('#toggle-bp-lines');
bpToggle.disabled = false;
bpToggle.addEventListener('click', () => {
  const asLines = bpToggle.getAttribute('aria-pressed') !== 'true';
  renderBloodPressure(asLines);
  bpToggle.setAttribute('aria-pressed', String(asLines));
  bpToggle.textContent = asLines ? 'BP: Lines' : 'BP: Bars';
});
document.querySelector('#bp-summary').textContent = `Period Avg: ${Math.round(mean(bpAll.map(r => r.systolic)))}/${Math.round(mean(bpAll.map(r => r.diastolic)))} mmHg · Total Readings: ${bpAll.length} over ${dailyBloodPressure.length} days`;

const weightSvg = document.querySelector('#weight-chart');
const weightTop = 20, weightBottom = 208;
const weightAll = reportDays.flatMap(day => day.weight);
const weightMin = Math.floor((Math.min(...weightAll.map(r => r.kg)) - .2) * 2) / 2;
const weightMax = Math.ceil((Math.max(...weightAll.map(r => r.kg)) + .2) * 2) / 2;
const weightY = value => weightBottom - (value - weightMin) / (weightMax - weightMin) * (weightBottom - weightTop);
const weightTicks = Array.from({ length: Math.round((weightMax - weightMin) / .5) + 1 }, (_, i) => weightMin + i * .5);
frame(weightSvg, weightTop, weightBottom, weightTicks, weightY);
let path = '';
let previousHasWeight = false;
reportDays.forEach((day, index) => {
  const kg = mean(day.weight.map(r => r.kg));
  if (kg === null) return;
  path += `${previousHasWeight ? 'L' : 'M'}${x(index)},${weightY(kg)} `;
  previousHasWeight = true;
});
element(weightSvg, 'path', { d: path, fill: 'none', stroke: '#0b7979', 'stroke-width': 1.8, 'data-weight-line': '' });
reportDays.forEach((day, index) => {
  const kg = mean(day.weight.map(r => r.kg));
  if (kg === null) return;
  const point = element(weightSvg, 'circle', { cx: x(index), cy: weightY(kg), r: 2.7, fill: '#0b7979', 'data-weight-day': index + 1 });
  element(point, 'title', {}, `September ${index + 1}: ${kg.toFixed(1)} kg`);
  element(weightSvg, 'text', { x: x(index), y: weightY(kg) - 11, 'text-anchor': 'middle', class: 'average-label', 'data-average': 'weight' }, kg.toFixed(1));
});
const weightDays = reportDays.filter(day => day.weight.length > 0).length;
document.querySelector('#weight-summary').textContent = `Period Avg: ${mean(weightAll.map(r => r.kg)).toFixed(1)} kg · Total Readings: ${weightAll.length} over ${weightDays} days`;

const printButton = document.querySelector('#print-report');
printButton.disabled = false;
printButton.addEventListener('click', () => window.print());
document.documentElement.dataset.reportReady = 'true';
