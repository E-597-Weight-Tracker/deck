# NOCHF

A static presentation website built with `index.html`, `styles.css`, and `scripts.js`. The color and design reference is in `styles.md`.

## Local preview

Install Node.js 22.12 or newer, then run this from the project folder:

```sh
npm install
npm start
```

Open <http://localhost:3000>. `npm run dev` starts the same Vite server. Install dependencies once after cloning (or use `npm ci` for the exact versions in `package-lock.json`). No build step is needed. Stop the server with Ctrl+C.

CSS edits update in place through Vite's hot module replacement. HTML and JavaScript edits automatically reload the page. The selected slide is saved by its ID in this tab's session storage and restored after reloads, including when slides are reordered. If a saved slide is removed or storage is unavailable, the deck starts at Welcome. New sessions start at Welcome.

To choose another port in PowerShell:

```powershell
$env:PORT = '3001'
npm start
```

The preview listens only on your computer and exits with an error if the chosen port is occupied. Stop any previous preview process before starting Vite. Put future images, fonts, and downloadable reports in `assets/` and reference them using relative URLs, such as `assets/team.jpg`.

Vite is used only for local development. Keep browser code compatible with direct static hosting: use relative module imports and avoid npm package imports or Vite-only runtime APIs unless a production build is added to the deployment workflow.

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
