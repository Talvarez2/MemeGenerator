# Meme Generator

A simple meme generator built with React. Fetches random meme templates from the [imgflip API](https://api.imgflip.com/) and lets you add custom top and bottom text.

**[Live Demo](https://talvarez2.github.io/MemeGenerator/)**

## Features

- Fetches meme templates from imgflip API
- Custom top and bottom text overlay
- Random meme generation on each click

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Deploy to GitHub Pages
yarn deploy
```

## Tech Stack

- **React** — UI framework (functional components with hooks)
- **react-scripts** — Build tooling (Create React App)
- **gh-pages** — GitHub Pages deployment

## Project Structure

```
src/
├── index.js                          # Entry point
├── App.js                            # Root component
└── components/
    ├── Header/index.js               # App header with logo and title
    └── MemeGenerator/index.js         # Main meme form and display
public/
├── index.html                        # HTML template
└── style.css                         # Global styles
```

## License

MIT
