import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#2B3844",
            },
            background: {
              default: "#202C36",
              //   paper: 'yellow',
            },
          }
        : {
            primary: {
              main: "#FFFFFF",
            },
            background: {
              default: "#FAFAFA",
            },
          }),
    },
  };
};
