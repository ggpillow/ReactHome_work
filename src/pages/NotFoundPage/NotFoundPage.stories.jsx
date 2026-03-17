import NotFoundPage from "./NotFoundPage";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Pages/NotFoundPage",
  component: NotFoundPage,
};

export const Default = () => (
  <MemoryRouter>
    <NotFoundPage />
  </MemoryRouter>
);