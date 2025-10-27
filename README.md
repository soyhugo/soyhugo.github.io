<<<<<<< HEAD
# soyhugo.github.io
=======
<h1 align="center">Hugo Lopez Garcia — Web Portfolio</h1>
<p align="center">React-based personal site with a projects carousel, animated hero, and clean, responsive sections.</p>

## Overview

This repo contains the source for my portfolio website. It’s a Create React App (CRA) project using Material UI icons and React Bootstrap for the spotlight carousel.

Highlights
- Animated headline with a fixed layout (no reflow while typing)
- Spotlight carousel with project screenshots
- Projects grid with quick GitHub links
- Smooth section transitions and responsive layout

## Requirements

- Node.js 16+ (18 or 20 recommended)
- npm 7+

## Local development

1) Install dependencies

```powershell
npm install
```

2) Start the dev server (http://localhost:3000)

```powershell
npm start
```

## Build

Create an optimized production build in the `build/` folder:

```powershell
npm run build
```

## Deploy (GitHub Pages)

This project includes a gh-pages script. To publish the current build:

```powershell
npm run deploy
```

Notes
- Ensure your repository’s Pages settings match the branch used by the deploy script. The script currently pushes to the `master` branch (`-b master`). Update `package.json` if your Pages branch is different (e.g., `gh-pages`).
- If using a custom domain, add it to a `CNAME` file at the repo root (already present).

## Tech stack

- React 17 (CRA)
- React Bootstrap (Carousel), Bootstrap 4
- Material UI Icons

## Project structure

```
src/
  components/       # UI sections (Intro, Projects, About, etc.)
  styles/           # CSS modules per section
public/
  assets/           # Images used by the carousel and pages
```

## Scripts

- `npm start` — start dev server
- `npm run build` — production build
- `npm test` — run tests (CRA)
- `npm run deploy` — publish to GitHub Pages (see notes above)

## License

All rights reserved. If you’d like to reuse parts of this project, open an issue to discuss.
>>>>>>> cc70a05 (Base Portfolio)
