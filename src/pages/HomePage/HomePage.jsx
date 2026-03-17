import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KinopoiskList from "../../components/KinopoiskList";
import SearchInput from "../../components/SearchInput";
import GenreFilter from "../../components/GenreFilter";
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import styles from "./styles.module.css";

const API_KEY = "f098ba98-fa56-41ba-90d9-1443d803c903";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Все");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch(
          "https://kinopoiskapiunofficial.tech/api/v2.2/films/top",
          {
            headers: {
              "X-API-KEY": API_KEY,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        const data = await response.json();
        setFilms(data.films);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  const filteredFilms = films.filter((film) => {
    const matchSearch = film.nameRu
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchGenre =
      genre === "Все" || film.genres?.some((g) => g.genre === genre);
    return matchSearch && matchGenre;
  });

  const handleFilmClick = (film) => {
    navigate(`/film/${film.filmId}`);
  };

  return (
    <Box sx={{ paddingTop: "64px" }}>
      
      <Box className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <Box className={styles.bannerContent}>
          <LocalMoviesIcon sx={{ fontSize: 60, color: "#7b2ff7", mb: 2 }} />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #00d2ff, #7b2ff7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
            }}
          >
            FunnyFilm
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "1rem", md: "1.25rem" },
              textAlign: "center",
              maxWidth: 600,
              mt: 2,
              mb: 3,
            }}
          >
            Лучшие фильмы со всего мира — ищи, сохраняй в избранное и делись с
            друзьями! 🎬
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            sx={{
              background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
              borderRadius: "12px",
              padding: "12px 40px",
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(123,47,247,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 30px rgba(123,47,247,0.6)",
              },
            }}
          >
            Смотреть каталог
          </Button>
        </Box>
      </Box>

      
      <Container id="catalog" maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          🎥 Каталог фильмов
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 3,
            alignItems: { sm: "center" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <SearchInput value={search} onChange={setSearch} />
          </Box>
          <GenreFilter activeGenre={genre} onChange={setGenre} />
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress sx={{ color: "#00d2ff" }} />
          </Box>
        ) : error ? (
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              background: "rgba(255,23,68,0.1)",
              borderRadius: "16px",
              border: "1px solid rgba(255,23,68,0.3)",
            }}
          >
            <Typography sx={{ color: "#ff1744", fontSize: "1.1rem" }}>
              ❌ {error}
            </Typography>
          </Box>
        ) : filteredFilms.length > 0 ? (
          <KinopoiskList films={filteredFilms} onFilmClick={handleFilmClick} />
        ) : (
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              background: "rgba(123,47,247,0.1)",
              borderRadius: "16px",
              border: "1px solid rgba(123,47,247,0.2)",
            }}
          >
            <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
              Ничего не найдено 😢
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;