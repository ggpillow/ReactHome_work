import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
  const name = useSelector((state) => state.user.name);
  const favCount = useSelector((state) => state.favorites.films.length);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Главная", path: "/", icon: <HomeIcon /> },
    { label: "Избранное", path: "/favorites", icon: <FavoriteIcon /> },
    { label: "Профиль", path: "/profile", icon: <PersonIcon /> },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #0b0b1a, #1a1a3e, #0d1b2a)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        borderBottom: "1px solid rgba(138, 43, 226, 0.2)",
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <NavLink to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <MovieIcon sx={{ color: "#7b2ff7", fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              background: "linear-gradient(135deg, #00d2ff, #7b2ff7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            FunnyFilm
          </Typography>
        </NavLink>

        
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <Button
                    startIcon={
                      item.label === "Избранное" ? (
                        <Badge badgeContent={favCount} color="error" max={99}>
                          {item.icon}
                        </Badge>
                      ) : (
                        item.icon
                      )
                    }
                    sx={{
                      color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                      background: isActive
                        ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                        : "transparent",
                      padding: "8px 20px",
                      borderRadius: "12px",
                      fontWeight: isActive ? 600 : 500,
                      boxShadow: isActive
                        ? "0 4px 15px rgba(123,47,247,0.4)"
                        : "none",
                      transition: "all 0.3s ease",
                      textTransform: "none",
                      "&:hover": {
                        color: "#fff",
                        background: isActive
                          ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                          : "rgba(123,47,247,0.15)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </NavLink>
            ))}

            {name && (
              <Typography
                sx={{
                  color: "#00d2ff",
                  fontSize: "14px",
                  fontWeight: 500,
                  ml: 2,
                }}
              >
                👤 {name}
              </Typography>
            )}
          </Box>
        ) : (
         
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Badge badgeContent={favCount} color="error">
                <FavoriteIcon sx={{ color: "#7b2ff7" }} />
              </Badge>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: "linear-gradient(180deg, #0b0b1a, #1a1a3e)",
                  color: "#fff",
                  width: 250,
                },
              }}
            >
              <List>
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    {({ isActive }) => (
                      <ListItem
                        sx={{
                          background: isActive
                            ? "linear-gradient(135deg, #7b2ff7, #00d2ff)"
                            : "transparent",
                          borderRadius: "12px",
                          m: 1,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {item.icon}
                        <ListItemText
                          primary={
                            item.label === "Избранное"
                              ? `${item.label} (${favCount})`
                              : item.label
                          }
                          sx={{ ml: 1, color: isActive ? "#fff" : "rgba(255,255,255,0.6)" }}
                        />
                      </ListItem>
                    )}
                  </NavLink>
                ))}

                {name && (
                  <ListItem>
                    <Typography sx={{ color: "#00d2ff" }}>👤 {name}</Typography>
                  </ListItem>
                )}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;