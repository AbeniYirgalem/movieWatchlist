# movieWatchlist

A small React + Vite web app to search for movies and save favorites to a watchlist.

This repository is a lightweight starter app built with Vite and React. It demonstrates component composition, context-based state for favorites, and a simple UI to browse and manage a personal movie watchlist.

## Features

- Search and browse movies (UI only; replace or wire up an API if needed)
- Add / remove movies from your watchlist
- Persistent-ish favorites via React Context
- Minimal, easy-to-read codebase based on Vite + React

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry
- `src/App.jsx` — top-level app component
- `src/components/Movie.jsx` — movie card component
- `src/components/Watchlist.jsx` — watchlist view
- `src/components/Nav.jsx` — navigation/header
- `src/context/FavoriteContext.jsx` — favorites context/provider
- `package.json` — scripts & dependencies

## Quick start

Prerequisites: Node.js 16+ / npm or a compatible package manager.

1.  Install dependencies

```powershell
npm install
```

# movieWatchlist

A small React + Vite web app to search for movies and save favorites to a watchlist.

This repository is a lightweight starter app built with Vite and React. It demonstrates component composition, context-based state for favorites, and a simple UI to browse and manage a personal movie watchlist.

## Features

- Search and browse movies (UI only; replace or wire up an API if needed)
- Add / remove movies from your watchlist
- Persistent-ish favorites via React Context
- Minimal, easy-to-read codebase based on Vite + React

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry
- `src/App.jsx` — top-level app component
- `src/components/Movie.jsx` — movie card component
- `src/components/Watchlist.jsx` — watchlist view
- `src/components/Nav.jsx` — navigation/header
- `src/context/FavoriteContext.jsx` — favorites context/provider
- `package.json` — scripts & dependencies

## Quick start

Prerequisites: Node.js 16+ / npm or a compatible package manager.

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

3. Open the app

Open the URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create production build
- `npm run preview` — preview production build locally

Check `package.json` for the exact scripts and versions.


## Tests

There are no automated tests included yet. Adding a small test suite with Jest or Vitest is recommended for future work.

## Contributing

Contributions are welcome. Feel free to open issues or PRs for bugs, enhancements, or additional features.


