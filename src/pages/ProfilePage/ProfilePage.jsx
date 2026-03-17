import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../store/userSlice";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./styles.module.css";

function ProfilePage() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);

  const handleSave = () => {
    if (input.trim()) {
      dispatch(setName(input.trim()));
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <Box sx={{ pt: "64px", minHeight: "100vh" }}>
      <Container maxWidth="sm" sx={{ py: { xs: 3, md: 5 } }}>
        <div className={styles.fadeIn}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                background: "linear-gradient(135deg, #7b2ff7, #00d2ff)",
                fontSize: "2.5rem",
                boxShadow: "0 8px 30px rgba(123,47,247,0.4)",
              }}
            >
              {name ? name.charAt(0).toUpperCase() : "?"}
            </Avatar>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 1,
              background: "linear-gradient(135deg, #00d2ff, #7b2ff7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Профиль
          </Typography>

        
          {name && (
            <Paper
              className={styles.slideIn}
              sx={{
                p: 3,
                mb: 3,
                mt: 3,
                background: "rgba(123,47,247,0.1)",
                border: "1px solid rgba(123,47,247,0.3)",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" sx={{ color: "#fff" }}>
                Привет,{" "}
                <span style={{ color: "#00d2ff", fontWeight: 700 }}>
                  {name}
                </span>
                ! 👋
              </Typography>
            </Paper>
          )}

          
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              mt: 3,
              backgroundColor: "#1a1a2e",
              border: "1px solid rgba(123,47,247,0.2)",
              borderRadius: "16px",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,0.6)",
                mb: 2,
                fontSize: "14px",
              }}
            >
              {name ? "Хотите сменить имя?" : "Как вас зовут?"}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Введите имя..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditIcon sx={{ color: "#7b2ff7" }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    borderRadius: "14px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    "& fieldset": {
                      borderColor: "rgba(123,47,247,0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(123,47,247,0.6)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00d2ff",
                      boxShadow: "0 0 15px rgba(0,210,255,0.2)",
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "rgba(255,255,255,0.5)",
                    opacity: 1,
                  },
                }}
              />

              <Button
                fullWidth
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
                disabled={!input.trim()}
                sx={{
                  background: input.trim()
                    ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                    : "rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "14px",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: input.trim() ? "translateY(-2px)" : "none",
                    boxShadow: input.trim()
                      ? "0 8px 25px rgba(123,47,247,0.4)"
                      : "none",
                  },
                  "&.Mui-disabled": {
                    color: "rgba(255,255,255,0.3)",
                  },
                }}
              >
                Сохранить
              </Button>
            </Box>
          </Paper>
        </div>
      </Container>
    </Box>
  );
}

export default ProfilePage;