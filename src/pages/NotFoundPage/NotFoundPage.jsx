import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./styles.module.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: "64px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.container}>
        <Typography
          sx={{
            fontSize: { xs: "6rem", md: "10rem" },
            fontWeight: 900,
            background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <SentimentDissatisfiedIcon
          sx={{ fontSize: 60, color: "rgba(123,47,247,0.5)", my: 2 }}
        />

        <Typography
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 1,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Страница не найдена
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.4)",
            mb: 4,
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Возможно, она была удалена или вы ошиблись в адресе
        </Typography>

        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          sx={{
            background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
            borderRadius: "12px",
            padding: "12px 32px",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "1rem",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(123,47,247,0.4)",
            },
          }}
        >
          На главную
        </Button>
      </div>
    </Box>
  );
}

export default NotFoundPage;