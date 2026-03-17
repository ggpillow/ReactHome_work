import { Box, Button } from "@mui/material";

const genres = [
  "Все",
  "драма",
  "криминал",
  "фантастика",
  "боевик",
  "триллер",
  "комедия",
  "мелодрама",
];

function GenreFilter({ activeGenre, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: { xs: "nowrap", sm: "wrap" },
        overflowX: { xs: "auto", sm: "visible" },
        pb: 1,
        "&::-webkit-scrollbar": {
          height: 4,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(123,47,247,0.3)",
          borderRadius: "4px",
        },
      }}
    >
      {genres.map((genre) => {
        const isActive = activeGenre === genre;
        return (
          <Button
            key={genre}
            variant={isActive ? "contained" : "outlined"}
            onClick={() => onChange(genre)}
            sx={{
              background: isActive
                ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                : "transparent",
              color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
              borderColor: "rgba(123,47,247,0.4)",
              borderRadius: "20px",
              textTransform: "capitalize",
              fontWeight: isActive ? 600 : 500,
              fontSize: "13px",
              padding: "6px 18px",
              minWidth: "auto",
              whiteSpace: "nowrap",
              boxShadow: isActive
                ? "0 4px 15px rgba(123,47,247,0.3)"
                : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: isActive
                  ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                  : "rgba(123,47,247,0.15)",
                borderColor: "rgba(123,47,247,0.8)",
                color: "#fff",
              },
            }}
          >
            {genre}
          </Button>
        );
      })}
    </Box>
  );
}

export default GenreFilter;