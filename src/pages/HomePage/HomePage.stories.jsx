import HomePage from "./HomePage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/favoritesSlice";
import userReducer from "../../store/userSlice";

const mockStore = configureStore({
  reducer: { favorites: favoritesReducer, user: userReducer },
});

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

export const Default = () => (
  <Provider store={mockStore}>
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  </Provider>
);