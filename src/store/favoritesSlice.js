import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (films) => {
  localStorage.setItem("favorites", JSON.stringify(films));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    films: loadFromStorage(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const film = action.payload;
      const exists = state.films.find((f) => f.filmId === film.filmId);

      if (exists) {
        state.films = state.films.filter((f) => f.filmId !== film.filmId);
      } else {
        state.films.push(film);
      }

      saveToStorage(state.films);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;