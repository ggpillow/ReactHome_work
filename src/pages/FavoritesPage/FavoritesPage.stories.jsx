import FavoritesPage from "./FavoritesPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/favoritesSlice";
import userReducer from "../../store/userSlice";

const mockFilms = [
  {
    filmId: 1,
    nameRu: "Матрица",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/301/301_1.jpg",
    rating: 8.5,
    year: 1999,
    genres: [{ genre: "фантастика" }, { genre: "боевик" }],
  },
  {
    filmId: 2,
    nameRu: "Интерстеллар",
    posterUrlPreview:
      "https://kinopoiskapiunofficial.tech/images/posters/kp/301/301_1.jpg",
    rating: 8.6,
    year: 2014,
    genres: [{ genre: "фантастика" }, { genre: "драма" }],
  },
];

const createStore = (films = []) =>
  configureStore({
    reducer: { favorites: favoritesReducer, user: userReducer },
    preloadedState: {
      favorites: { films },
      user: { name: "" },
    },
  });

export default {
  title: "Pages/FavoritesPage",
  component: FavoritesPage,
};

export const Empty = () => (
  <Provider store={createStore()}>
    <MemoryRouter>
      <FavoritesPage />
    </MemoryRouter>
  </Provider>
);

export const WithFilms = () => (
  <Provider store={createStore(mockFilms)}>
    <MemoryRouter>
      <FavoritesPage />
    </MemoryRouter>
  </Provider>
);