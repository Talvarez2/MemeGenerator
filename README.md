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

| Dependency | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 16.x | UI framework (functional components with hooks) |
| [react-scripts](https://create-react-app.dev/) | 3.x | Build tooling (Create React App) |
| [gh-pages](https://github.com/tschaub/gh-pages) | 2.x | GitHub Pages deployment |

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
