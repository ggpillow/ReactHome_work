import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import FavoritesPage from "../../pages/FavoritesPage";
import FilmPage from "../../pages/FilmPage";
import NotFoundPage from "../../pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;