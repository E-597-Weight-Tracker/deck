# NOCHF

A static presentation website built with `index.html`, `styles.css`, and `scripts.js`. The color and design reference is in `styles.md`.

## Local preview

Install Node.js 22.12 or newer, then run this from the project folder:

```sh
npm install
npm start
```

Open <http://localhost:3000>. `npm run dev` starts the same Vite server. Install dependencies once after cloning (or use `npm ci` for the exact versions in `package-lock.json`). No build step is needed. Stop the server with Ctrl+C. For browser checks, reuse the user's running server; do not start a separate preview server or change its port.

CSS edits update in place through Vite's hot module replacement. HTML and JavaScript edits automatically reload the page. The selected slide is saved by its ID in this tab's session storage and restored after reloads, including when slides are reordered. If a saved slide is removed or storage is unavailable, the deck starts at Welcome. New sessions start at Welcome.

To choose another port in PowerShell:

```powershell
$env:PORT = '3001'
npm start
```

The preview listens only on your computer and exits with an error if the chosen port is occupied. Stop any previous preview process before starting Vite. Put future images, fonts, and downloadable reports in `assets/` and reference them using relative URLs, such as `assets/team.jpg`.

CHF and Measurements separate the disease context from the monitoring evidence. Click a numbered citation to open its full reference, or use “References” to browse all sources. Close the reference dialog with its Close button or Escape; focus returns to the link you opened it from.

Vite is used only for local development. Keep browser code compatible with direct static hosting: use relative module imports and avoid npm package imports or Vite-only runtime APIs unless a production build is added to the deployment workflow.

## Printable patient report

Open `report.html` from the Report slide or at `http://localhost:3000/report.html` during development. The separate report uses fictional data in `report-data.js`, daily BP range bars (daily-average diastolic to systolic), and a weight line in kilograms across 30 days. Daily-average systolic is labeled above each bar, diastolic below it, and weight above each point. Individual readings and timestamps are not printed. Left-aligned summaries show Period Avg and Total Readings, based on individual measurements. The sample has 52 BP and 35 weight readings, with a shared September 12-14 gap and isolated missing days. Missing days have no bars, dots, or value labels; the weight line connects the recorded points across them. Missing data is never treated as zero or included in averages or reading counts.

Use **Print / Save as PDF**, choose US Letter landscape at 100% scale, and turn off browser headers and footers. The print stylesheet provides half-inch margins. The PDF is generated from the same HTML as the screen preview; there is no backend or direct-download service.

The **BP: Bars / BP: Lines** toggle switches the blood pressure chart between range bars and two daily-average lines. Both lines are solid: systolic uses round points and diastolic uses square points. Both connect across missing days without adding points. Printing uses the selected view and hides the toggle. The initial view is bars.

The reviewed sample is `output/pdf/nochf-patient-report-sample.pdf`. To regenerate it while the preview server runs, execute `node tools/export-report.cjs` with Playwright available through local dependencies or `NODE_PATH` and Microsoft Edge installed. This local helper checks for overlapping/clipped labels, confirms page fit and reading counts, and checks the print action. It is not required by the hosted site.

## GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Open **Actions → Deploy GitHub Pages → Run workflow**, or push another commit to `main`.
4. Once the deployment succeeds, use the URL shown in the deployment or Pages settings.

The included `.github/workflows/pages.yml` publishes the three site files, the `img/` folder (including logo attribution), and the optional `assets/` folder. Root documentation and local tooling are excluded from the deployment. If your default branch has a different name, update the workflow's branch filter.

GitHub Pages continues to serve the source files directly; it does not run Vite or need to install npm dependencies. The module script and slide restoration work in the published site as well.

The site uses relative asset URLs so it can run at a repository Pages URL or a custom domain. Font Awesome loads from its external CDN and requires an internet connection.

For **nochf.com**, configure the custom domain in the repository's Pages settings, configure your DNS with the values in GitHub's documentation, and enable HTTPS when available. The workflow does not configure DNS or the domain for you.

- [GitHub Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Vite development server documentation](https://vite.dev/guide/)
- [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
