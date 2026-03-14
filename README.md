# Bio GitHub Pages Starter

This repository is set up as a static site that builds with npm and deploys to GitHub Pages through GitHub Actions.

Install Node.js 22 or newer locally before running the npm commands below.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

Push to `main` and GitHub Actions will build the site and deploy the generated `dist` directory to GitHub Pages.

In the repository settings on GitHub, set Pages to use **GitHub Actions** as the source.