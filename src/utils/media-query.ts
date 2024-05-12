import { Theme } from "@mui/material";

export const forMobile = (theme: Theme) => theme.breakpoints.only("xs");
export const forTablet = (theme: Theme) => theme.breakpoints.only("sm");
export const forDesktop = (theme: Theme) => theme.breakpoints.up("md");
