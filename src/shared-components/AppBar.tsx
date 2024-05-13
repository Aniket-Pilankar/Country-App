import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useThemeContext } from "../components/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Topbar() {
  const { theme, colorMode } = useThemeContext();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "70px" }}>
      <AppBar color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </Typography>
          <Button
            variant="text"
            startIcon={
              theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )
            }
            color="inherit"
            onClick={colorMode.toggleMode}
            sx={{ textTransform: "capitalize" }}
          >
            {theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
