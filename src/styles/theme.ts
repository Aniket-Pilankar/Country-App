import { PaletteMode } from "@mui/material";
import { red } from "@mui/material/colors";

// export const tokens = (mode: PaletteMode) => ({
//   ...(mode === "dark"
//     ? {
//         primary: {
//           100: "#e0e0e0",
//           200: "#c2c2c2",
//           300: "#a3a3a3",
//         },
//       }
//     : {
//         grey: {
//           100: "#141414",
//           200: "#292929",
//           300: "#3d3d3d",
//           400: "#525252",
//           500: "#666666",
//           600: "#858585",
//           700: "#a3a3a3",
//           800: "#c2c2c2",
//           900: "#e0e0e0",
//         },
//         blueAccent: {
//           100: "#151632",
//           200: "#2a2d64",
//           300: "#3e4396",
//           400: "#535ac8",
//           500: "#6870fa",
//           600: "#868dfb",
//           700: "#a4a9fc",
//           800: "#c3c6fd",
//           900: "#e1e2fe",
//         },
//       }),
// });

export const getDesignTokens = (mode: PaletteMode) => {
  //   const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              //   main: colors.primary[500],
              //   main: "#FFFFFF",
              // secondBlue:
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
              //   default: "red",
            },
          }),
    },
  };
};
