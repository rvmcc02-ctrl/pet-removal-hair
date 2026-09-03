# FurSweep™ — Pet Hair Removal Products

GitHub-ready Vite + React website for a pet hair removal store.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload **all files and folders from this project** to the repository root.
3. Make sure the default branch is `main` (or `master`).
4. Open **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **GitHub Actions**.
6. Push to `main`. The included workflow will build and publish the site automatically.

Your site will normally be available at:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

### Important

- Do not upload `node_modules`.
- The project uses `vite.config.ts` with `base: './'`, so it works from a GitHub Pages repository path.
- The workflow uses `npm install`, so a `package-lock.json` file is not required.
- Product content and product images are primarily configured in `src/data/products.ts`.
- Main website sections are in `src/components/`.
- Global styling is in `src/index.css`.
- The browser does not require a Node/Express server after the Vite build.

## Local testing

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```
