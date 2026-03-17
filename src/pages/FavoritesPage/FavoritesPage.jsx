import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../../store/favoritesSlice";
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import styles from "./styles.module.css";

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.films);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: "64px", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <div className={styles.fadeIn}>
          
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 4,
            }}
          >
            <FavoriteIcon sx={{ color: "#ff1744", fontSize: 32 }} />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #00d2ff, #7b2ff7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Избранное
            </Typography>
            <Chip
              label={favorites.length}
              size="small"
              sx={{
                background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
              }}
            />
          </Box>

          
          {favorites.length === 0 ? (
            <Box
              className={styles.emptyState}
              sx={{
                textAlign: "center",
                py: 10,
                px: 3,
                background: "rgba(123,47,247,0.05)",
                borderRadius: "20px",
                border: "1px dashed rgba(123,47,247,0.3)",
              }}
            >
              <MovieIcon
                sx={{
                  fontSize: 80,
                  color: "rgba(123,47,247,0.3)",
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "rgba(255,255,255,0.5)", mb: 1 }}
              >
                Пока пусто 😢
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.3)",
                  mb: 3,
                  fontSize: "14px",
                }}
              >
                Добавляйте фильмы в избранное, нажав ❤️ на карточке
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
                  borderRadius: "12px",
                  padding: "10px 30px",
                  textTransform: "none",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(123,47,247,0.4)",
                  },
                }}
              >
                Перейти к каталогу
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {favorites.map((film, index) => (
                <div
                  key={film.filmId}
                  className={styles.cardAnimation}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#1a1a2e",
                      color: "#fff",
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow:
                          "0 12px 30px rgba(123,47,247,0.4)",
                      },
                      "&:hover img": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => navigate(`/film/${film.filmId}`)}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="350"
                        image={film.posterUrlPreview}
                        alt={film.nameRu}
                        sx={{
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                      />

                      
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          background: "rgba(0,0,0,0.7)",
                          backdropFilter: "blur(5px)",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <StarIcon
                          sx={{ color: "#FFD700", fontSize: 18 }}
                        />
                        <Typography
                          sx={{ fontSize: 14, fontWeight: 600 }}
                        >
                          {film.rating}
                        </Typography>
                      </Box>

                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(toggleFavorite(film));
                        }}
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          backgroundColor: "rgba(255,23,68,0.8)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#ff1744",
                            transform: "scale(1.2) rotate(10deg)",
                          },
                        }}
                      >
                        <DeleteIcon sx={{ color: "#fff", fontSize: 20 }} />
                      </IconButton>
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          fontSize: "1rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {film.nameRu}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 0.5,
                          flexWrap: "wrap",
                          mb: 1,
                        }}
                      >
                        {film.genres?.slice(0, 2).map((g, idx) => (
                          <Chip
                            key={idx}
                            label={g.genre}
                            size="small"
                            sx={{
                              backgroundColor:
                                "rgba(123,47,247,0.2)",
                              color: "#00d2ff",
                              fontSize: "11px",
                              height: "24px",
                            }}
                          />
                        ))}
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {film.year}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
          )}
        </div>
      </Container>
    </Box>
  );
}

export default FavoritesPage;