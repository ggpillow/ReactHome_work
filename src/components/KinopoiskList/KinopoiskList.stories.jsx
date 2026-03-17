import KinopoiskList from "./KinopoiskList";
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

const mockStore = configureStore({
  reducer: { favorites: favoritesReducer, user: userReducer },
});

export default {
  title: "Components/KinopoiskList",
  component: KinopoiskList,
};

export const Default = () => (
  <Provider store={mockStore}>
    <MemoryRouter>
      <KinopoiskList films={mockFilms} />
    </MemoryRouter>
  </Provider>
);

export const Empty = () => (
  <Provider store={mockStore}>
    <MemoryRouter>
      <KinopoiskList films={[]} />
    </MemoryRouter>
  </Provider>
);