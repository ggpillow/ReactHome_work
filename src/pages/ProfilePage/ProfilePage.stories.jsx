import ProfilePage from "./ProfilePage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../store/userSlice";
import favoritesReducer from "../../store/favoritesSlice";

const createStore = (name = "") =>
  configureStore({
    reducer: { user: userReducer, favorites: favoritesReducer },
    preloadedState: {
      user: { name },
      favorites: { films: [] },
    },
  });

export default {
  title: "Pages/ProfilePage",
  component: ProfilePage,
};

export const Default = () => (
  <Provider store={createStore()}>
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  </Provider>
);

export const WithName = () => (
  <Provider store={createStore("Олег")}>
    <MemoryRouter>
      <ProfilePage />
    </MemoryRouter>
  </Provider>
);