import { Stack, styled } from "@mui/material";
import { forDesktop, forMobile } from "../../utils/media-query";
import { generateClasses } from "../../utils/helper";

export const selectCompClasses = {
  ...generateClasses("Details", ["imagewrapper", "subdetails"]),
};

export const Root = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
  padding: theme.spacing(10, 6),
  [forMobile(theme)]: {
    padding: theme.spacing(3.5, 5),
  },
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  height: 401,
  [forDesktop(theme)]: {
    width: "50%",
  },
  [`& > .${selectCompClasses.imagewrapper}`]: {},
  [forMobile(theme)]: {
    width: "100%",
    height: 229,
  },
}));

export const DetailWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [forDesktop(theme)]: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: theme.spacing(8),
  },
  [`& > .${selectCompClasses.subdetails}`]: {
    flexGrow: 1,
  },

  [forMobile(theme)]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export const SubDetailWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  [forDesktop(theme)]: {
    justifyContent: "space-between",
  },
  [forMobile(theme)]: {
    flexDirection: "column",
    gap: theme.spacing(4),
  },
}));

export const FooterDetailWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  [forMobile(theme)]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(16),

  [forDesktop(theme)]: {},
  [forMobile(theme)]: {
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));