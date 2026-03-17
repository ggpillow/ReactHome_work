import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ value, onChange }) {
  return (
    <TextField
      fullWidth
      placeholder="Поиск фильма..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#00d2ff" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "#fff",
          borderRadius: "14px",
          backgroundColor: "rgba(255,255,255,0.05)",
          transition: "all 0.3s ease",
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
  );
}

export default SearchInput;