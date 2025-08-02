# Yihao Ding — Personal Website

A clean, single-page personal website ready to deploy on **GitHub Pages**. It includes:
- A **visit counter** powered by CountAPI (no server needed).
- A **placeholder profile photo** you can replace at `assets/profile.jpg`.
- A **GitHub Actions workflow** that builds and deploys the site automatically to Pages.

## Quick Start

1. **Create a new GitHub repository** (public is easiest) and name it, for example, `yihao` or `yihao-ding.github.io`.
2. **Upload these files** to the repository (keep the folder structure intact).
3. Go to **Settings → Pages** and make sure **Build and deployment → Source** is set to **GitHub Actions**.
4. Push/commit. The included workflow will publish your site automatically at `https://<your-username>.github.io/<repo>/`
   (or at `https://<your-username>.github.io/` if you name the repo `<your-username>.github.io`).

## Update the Visit Counter (optional but recommended)

This template uses [CountAPI](https://countapi.xyz) to display visits. To keep your analytics separate,
change the `namespace` and `key` in `assets/main.js`:

```js
const namespace = 'your-unique-namespace';
const key = 'homepage';
```

> Tip: Pick a unique namespace such as `yihao-ding-<random>` to avoid collisions.

## Replace Your Photo

Replace `assets/profile.jpg` with your own square headshot, ideally **600 × 600** pixels.

## Customize Social Links

Edit the links in `index.html` under the `<p class="links">` block. Replace `your-github-username`
and add your LinkedIn handle, personal domain, etc.

## Optional: Use a Badge Instead of JS

If you prefer a no-JS visit counter, you can embed a badge image (e.g., [hits.sh](https://hits.sh/)):

```html
<img src="https://hits.sh/<your-username>.github.io.svg?view=today-total" alt="Hits">
```

## Local Preview

You can open `index.html` directly in a browser for a quick preview. No build step is required.

## GitHub Pages Workflow

The workflow file at `.github/workflows/pages.yml` uses the official `actions/deploy-pages` action.
It triggers on pushes to the default branch and publishes the `./` root as a static site.

## License

MIT
