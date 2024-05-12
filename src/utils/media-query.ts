import { Theme } from "@mui/material";

// export const forMobile = (theme: Theme) => theme.breakpoints.only("xs");
// export const forTablet = (theme: Theme) => theme.breakpoints.down("md");
// export const forDesktop = (theme: Theme) => theme.breakpoints.up("md");
export const forMobile = (theme: Theme) =>
  theme.breakpoints.between("xs", "sm");
export const forTablet = (theme: Theme) =>
  theme.breakpoints.between("sm", "lg");
export const forDesktop = (theme: Theme) => theme.breakpoints.up("lg");
