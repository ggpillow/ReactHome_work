import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favoritesSlice";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

function FilmCard({ film }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.films);
  const isFav = favorites.some((f) => f.filmId === film.filmId);

  return (
    <Card
      onClick={() => navigate(`/film/${film.filmId}`)}
      sx={{
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1a1a2e",
        color: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 12px 30px rgba(123, 47, 247, 0.4)",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
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

        {/* Рейтинг */}
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
          <StarIcon sx={{ color: "#FFD700", fontSize: 18 }} />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            {film.rating}
          </Typography>
        </Box>

        {/* Кнопка избранного */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(film));
          }}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(5px)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.8)",
              transform: "scale(1.2)",
            },
          }}
        >
          {isFav ? (
            <FavoriteIcon sx={{ color: "#ff1744" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "#fff" }} />
          )}
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

        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mb: 1 }}>
          {film.genres?.slice(0, 2).map((g, idx) => (
            <Chip
              key={idx}
              label={g.genre}
              size="small"
              sx={{
                backgroundColor: "rgba(123,47,247,0.2)",
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
  );
}

export default FilmCard;