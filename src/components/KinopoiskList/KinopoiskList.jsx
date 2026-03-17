import FilmCard from "../FilmCard";
import { Box } from "@mui/material";

function KinopoiskList({ films }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 3,
      }}
    >
      {films.map((film) => (
        <FilmCard key={film.filmId} film={film} />
      ))}
    </Box>
  );
}

export default KinopoiskList;