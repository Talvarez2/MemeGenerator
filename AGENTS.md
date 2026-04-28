# AGENTS.md

## Project Overview

React meme generator app that fetches templates from the imgflip API and overlays user-provided text.

## How to Run

```bash
yarn install    # Install dependencies
yarn start      # Dev server at localhost:3000
yarn build      # Production build
yarn deploy     # Deploy to GitHub Pages
```

## Key Files

| File | Purpose |
|------|---------|
| `src/index.js` | Entry point, renders App into DOM |
| `src/App.js` | Root component, composes Header and MemeGenerator |
| `src/components/Header/index.js` | Header with logo and title |
| `src/components/MemeGenerator/index.js` | Core logic: API fetch, form inputs, meme display |
| `public/index.html` | HTML shell |
| `public/style.css` | All styles (global, no CSS modules) |

## Coding Conventions

- **Functional components** with hooks (`useState`, `useEffect`) — no class components
- **One component per directory** under `src/components/`, exported from `index.js`
- **Semantic HTML** — use `<header>`, `<main>`, `<span>` for decorative text, etc.
- **Accessibility** — all inputs must have associated labels (use `sr-only` class for visually hidden labels); decorative overlay text uses `aria-hidden="true"`; interactive elements must have visible focus styles
- **No TypeScript** — plain JavaScript with JSX
- **Styles** — plain CSS in `public/style.css` (not CSS-in-JS or modules)
- **API calls** — use `fetch` in `useEffect` with empty dependency array for mount-time requests; always add `.catch()` for error handling
