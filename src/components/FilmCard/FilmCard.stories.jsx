import FilmCard from "./FilmCard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/favoritesSlice";
import userReducer from "../../store/userSlice";

const mockFilm = {
  filmId: 1,
  nameRu: "Матрица",
  posterUrlPreview:
    "https://kinopoiskapiunofficial.tech/images/posters/kp/301/301_1.jpg",
  rating: 8.5,
  year: 1999,
  genres: [{ genre: "фантастика" }, { genre: "боевик" }],
};

const mockStore = configureStore({
  reducer: { favorites: favoritesReducer, user: userReducer },
});

export default {
  title: "Components/FilmCard",
  component: FilmCard,
};

export const Default = () => (
  <Provider store={mockStore}>
    <MemoryRouter>
      <div style={{ maxWidth: 280, padding: 20 }}>
        <FilmCard film={mockFilm} />
      </div>
    </MemoryRouter>
  </Provider>
);