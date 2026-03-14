# Bio GitHub Pages Starter

A personal linked-bio page that builds with npm and deploys to GitHub Pages through GitHub Actions.

Install Node.js 22 or newer locally before running the npm commands below.

## Customising your bio

Edit **`index.html`** to update:

- **Your Name** — replace `Your Name` with your real name.
- **@yourhandle** — replace `@yourhandle` with your social handle.
- **Bio description** — update the `<p class="bio-description">` text.
- **Links** — update the `href` values in the `<nav class="link-list">` section, and add or remove `<a class="link-item">` entries as needed.

## Adding a profile photo

Place a file named **`profile.jpg`** in the root of the repository (next to `index.html`). The page automatically detects the image and displays it as a circular avatar at the top of your bio card. If the file is not present the photo area is hidden and the layout remains clean.

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