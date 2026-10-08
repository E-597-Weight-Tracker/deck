// Usage: node tools/export-report.cjs
// Requires Playwright (installed locally or available through NODE_PATH) and Edge.
// Start the project's existing preview server before running this command.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, 'output', 'pdf');
  const qa = path.join(root, 'tmp', 'pdfs');
  fs.mkdirSync(output, { recursive: true });
  fs.mkdirSync(qa, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:3000/report.html', { waitUntil: 'networkidle' });
    await page.waitForSelector('html[data-report-ready="true"]');
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ media: 'print' });
    const checks = await page.evaluate(() => {
      const pageBox = document.querySelector('.report-page').getBoundingClientRect();
      const averageLabels = document.querySelectorAll('[data-average]').length;
      const collisions = [];
      const clippedLabels = [];
      for (const svg of document.querySelectorAll('.chart-section svg')) {
        const bounds = svg.getBoundingClientRect();
        const labels = [...svg.querySelectorAll('text')];
        for (let i = 0; i < labels.length; i++) {
          const a = labels[i].getBoundingClientRect();
          if (a.left < bounds.left || a.right > bounds.right || a.top < bounds.top || a.bottom > bounds.bottom) clippedLabels.push(labels[i].textContent);
          for (let j = i + 1; j < labels.length; j++) {
            const b = labels[j].getBoundingClientRect();
            if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) collisions.push([labels[i].textContent, labels[j].textContent]);
          }
        }
      }
      return {
        width: pageBox.width, height: pageBox.height,
        bpBars: document.querySelectorAll('[data-bp-day]').length,
        weightPoints: document.querySelectorAll('[data-weight-day]').length,
        averageLabels,
        bpMissingDays: Array.from({ length: 30 }, (_, i) => i + 1).filter(day => !document.querySelector(`[data-bp-day="${day}"]`)),
        weightMissingDays: Array.from({ length: 30 }, (_, i) => i + 1).filter(day => !document.querySelector(`[data-weight-day="${day}"]`)),
        weightSegments: document.querySelector('[data-weight-line]').getAttribute('d').split('M').length - 1,
        bpSummary: document.querySelector('#bp-summary').textContent,
        weightSummary: document.querySelector('#weight-summary').textContent,
        collisions,
        clippedLabels,
        toolbarHidden: getComputedStyle(document.querySelector('.report-toolbar')).display === 'none'
      };
    });
    console.log(JSON.stringify({ ...checks, errors }, null, 2));
    if (errors.length || checks.collisions.length || checks.clippedLabels.length || checks.bpBars !== 26 || checks.weightPoints !== 26 || checks.averageLabels !== 78 || checks.height > 720.1 || !checks.toolbarHidden) throw new Error('Report validation failed.');
    if (checks.bpMissingDays.join(',') !== '12,13,14,23' || checks.weightMissingDays.join(',') !== '6,12,13,14' || checks.weightSegments !== 1) throw new Error('Missing-day markers or continuous weight line were not rendered correctly.');
    if (!checks.bpSummary.endsWith('Total Readings: 52 over 26 days') || !checks.weightSummary.endsWith('Total Readings: 35 over 26 days')) throw new Error('Individual measurement or measured-day counts are incorrect.');
    await page.pdf({ path: path.join(output, 'nochf-patient-report-sample.pdf'), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
    await page.screenshot({ path: path.join(qa, 'report-print-preview.png'), fullPage: true });
    await page.emulateMedia({ media: 'screen' });
    const originalWeight = await page.locator('#weight-chart').innerHTML();
    const originalLabels = await page.locator('#bp-chart [data-average]').allTextContents();
    const toggle = page.getByRole('button', { name: 'Use blood pressure line graphs' });
    await toggle.click();
    if (await toggle.getAttribute('aria-pressed') !== 'true' || await page.locator('[data-bp-line]').count() !== 2 || await page.locator('[data-bp-point]').count() !== 52 || await page.locator('[data-bp-bar]').count() !== 0) throw new Error('BP line toggle failed.');
    if (JSON.stringify(await page.locator('#bp-chart [data-average]').allTextContents()) !== JSON.stringify(originalLabels) || await page.locator('#weight-chart').innerHTML() !== originalWeight) throw new Error('Toggling changed measurement data.');
    for (const day of [12, 13, 14, 23]) {
      if (await page.locator(`[data-bp-day="${day}"]`).count()) throw new Error('Line mode added a missing-day measurement.');
    }
    await page.screenshot({ path: path.join(qa, 'report-lines-screen.png'), fullPage: true });
    await page.emulateMedia({ media: 'print' });
    if (await page.locator('.report-toolbar').isVisible() || !await page.locator('#bp-legend').isVisible() || await page.locator('#bp-chart').getAttribute('data-mode') !== 'lines') throw new Error('Selected BP view was not preserved for print.');
    await page.pdf({ path: path.join(qa, 'report-lines-qa.pdf'), preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
    await page.emulateMedia({ media: 'screen' });
    await toggle.focus();
    await page.keyboard.press('Space');
    if (await toggle.getAttribute('aria-pressed') !== 'false' || await page.locator('[data-bp-bar]').count() !== 26 || await page.locator('[data-bp-line]').count() !== 0 || await page.locator('#bp-legend').isVisible()) throw new Error('Keyboard toggle did not restore bars.');
    await toggle.click();
    await toggle.click();
    if (await page.locator('[data-bp-day]').count() !== 26 || await page.locator('#bp-chart [data-average]').count() !== 52 || errors.length) throw new Error('Repeated toggles duplicated content or caused errors.');
    console.log('BP toggle verified in both directions, with keyboard control, unchanged data, missing-day markers, and selected print view.');
    await page.evaluate(() => { window.print = () => { document.documentElement.dataset.printRequested = 'true'; }; });
    await page.getByRole('button', { name: 'Print / Save as PDF' }).click();
    if (await page.locator('html').getAttribute('data-print-requested') !== 'true') throw new Error('Print button did not invoke printing.');
    console.log('Print action verified; PDF written to output/pdf/nochf-patient-report-sample.pdf');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
