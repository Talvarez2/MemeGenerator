# Meme Generator

A React meme generator that fetches random templates from the [imgflip API](https://api.imgflip.com/) and lets you add custom top and bottom text.

**[Live Demo](https://talvarez2.github.io/MemeGenerator/)**

## Features

- Fetches meme templates from imgflip API
- Custom top and bottom text overlay
- Random meme generation on each click

## Getting Started

```bash
yarn install   # Install dependencies
yarn start     # Dev server at localhost:3000
yarn build     # Production build
yarn deploy    # Deploy to GitHub Pages
```

## Tech Stack

- **React 16** — UI framework (functional components with hooks)
- **react-scripts 3** — Build tooling (Create React App)
- **gh-pages** — GitHub Pages deployment

## Project Structure

```
src/
├── index.js                           # Entry point
├── App.js                             # Root component
└── components/
    ├── Header/index.js                # App header with logo and title
    └── MemeGenerator/index.js         # Main meme form and display
public/
├── index.html                         # HTML template
└── style.css                          # Global styles
```

## License

MIT
