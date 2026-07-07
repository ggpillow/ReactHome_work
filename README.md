# FunnyFilm 🎬

**A Single Page Application built with React + Vite.**
Discover the best movies from around the world — search, filter by genre, save favorites, and share with friends!

---

## 🚀 Live Demo

▶️ [Open on GitHub Pages](https://ggpillow.github.io/ReactHome_work/)

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **React Router**
- **Material UI (MUI)**
- REST API integration (fetch)

---

## 📖 Features

- 🔍 Movie search
- 🎭 Filter by genre
- ⭐️ Save movies to Favorites
- 🗂 Browse top-rated movies
- 📱 Responsive design

---

## 🔗 API

Movie data is provided by the [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech/).

> ⚠️ You need your own API key. Get it at [kinopoiskapiunofficial.tech](https://kinopoiskapiunofficial.tech/),
> then add it to a `.env` file (see `.env.example`).

---

## 🔐 A Note on Security

This is a frontend-only demo hosted on GitHub Pages.

The API key is stored in environment variables (`.env`) and is **not committed** to the repository (see `.gitignore`).

⚠️ Since this is a static frontend, the key is still bundled into the client build and technically visible in the browser DevTools. In a production setup, API requests should be proxied through a **backend server** to keep the key private.

The Kinopoisk Unofficial API key is free and rate-limited, so this approach is acceptable for a demo project.

---

## 🚩 Getting Started

1. Clone the repository:
   `git clone https://github.com/ggpillow/ReactHome_work.git`

2. Install dependencies:
 ` npm install`

3. Create a .env file and add your API key:
`VITE_API_KEY=your_api_key_here`

4. Run the app:
`npm run dev`

## 👩‍💻 Author
Anna Pillow
