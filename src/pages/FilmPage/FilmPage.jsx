import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favoritesSlice";
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  CircularProgress,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "./styles.module.css";

const API_KEY = "f098ba98-fa56-41ba-90d9-1443d803c903";

const FilmPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.films);

  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isFav = film && favorites.some((f) => f.filmId === film.kinopoiskId);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
          {
            headers: {
              "X-API-KEY": API_KEY,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) throw new Error("Фильм не найден");
        const data = await response.json();
        setFilm(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          pt: "64px",
        }}
      >
        <CircularProgress sx={{ color: "#00d2ff" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", pt: "120px", color: "#ff1744" }}>
        <Typography variant="h5">❌ {error}</Typography>
        <Button onClick={() => navigate(-1)} sx={{ mt: 2, color: "#00d2ff" }}>
          Назад
        </Button>
      </Box>
    );
  }

  const handleToggleFav = () => {
    dispatch(
      toggleFavorite({
        filmId: film.kinopoiskId,
        nameRu: film.nameRu,
        posterUrlPreview: film.posterUrlPreview,
        rating: film.ratingKinopoisk,
        year: film.year,
        genres: film.genres,
      })
    );
  };

  return (
    <Box sx={{ pt: "64px" }}>
      <Box className={styles.filmBanner}>
        <Box
          className={styles.filmBannerBg}
          sx={{
            backgroundImage: `url(${film.coverUrl || film.posterUrl})`,
          }}
        />
        <Box className={styles.filmBannerOverlay} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: "#fff",
              mb: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={film.posterUrlPreview}
              alt={film.nameRu}
              sx={{
                width: { xs: 200, md: 300 },
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#fff",
                  mb: 1,
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                {film.nameRu}
              </Typography>

              {film.nameOriginal && (
                <Typography sx={{ color: "rgba(255,255,255,0.5)", mb: 2 }}>
                  {film.nameOriginal}
                </Typography>
              )}

              <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <StarIcon sx={{ color: "#FFD700" }} />
                  <Typography
                    sx={{
                      color: "#FFD700",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    {film.ratingKinopoisk || "—"}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <CalendarTodayIcon
                    sx={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}
                  />
                  <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                    {film.year}
                  </Typography>
                </Box>

                {film.filmLength && (
                  <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                    🕐 {film.filmLength} мин
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                {film.genres?.map((g, idx) => (
                  <Chip
                    key={idx}
                    label={g.genre}
                    sx={{
                      backgroundColor: "rgba(123,47,247,0.2)",
                      color: "#00d2ff",
                      fontSize: "14px",
                    }}
                  />
                ))}
              </Box>

              {film.description && (
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: "1rem",
                  }}
                >
                  {film.description}
                </Typography>
              )}

              <Button
                variant="contained"
                size="large"
                startIcon={isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                onClick={handleToggleFav}
                sx={{
                  background: isFav
                    ? "linear-gradient(135deg, #ff1744, #ff5252)"
                    : "linear-gradient(135deg, #7b2ff7, #00d2ff)",
                  borderRadius: "12px",
                  padding: "12px 32px",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: isFav
                      ? "0 8px 25px rgba(255,23,68,0.4)"
                      : "0 8px 25px rgba(123,47,247,0.4)",
                  },
                }}
              >
                {isFav ? "Убрать из избранного" : "В избранное"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FilmPage;