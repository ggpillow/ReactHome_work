import Header from "./Header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/favoritesSlice";
import userReducer from "../../store/userSlice";

const createStore = (name = "", filmsCount = 0) =>
  configureStore({
    reducer: { favorites: favoritesReducer, user: userReducer },
    preloadedState: {
      user: { name },
      favorites: { films: Array(filmsCount).fill({ filmId: 1 }) },
    },
  });

export default {
  title: "Components/Header",
  component: Header,
};

export const Default = () => (
  <Provider store={createStore()}>
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  </Provider>
);

export const WithUser = () => (
  <Provider store={createStore("Олег")}>
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  </Provider>
);

export const WithFavorites = () => (
  <Provider store={createStore("Олег", 5)}>
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  </Provider>
);