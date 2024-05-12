import {
  Stack,
  StackProps,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { forMobile, forTablet } from "../../utils/media-query";
import { generateClasses } from "../../utils/helper";

export const SearchField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  border: "none",
}));

export const Root = styled((props: StackProps) => (
  <Stack direction="column" gap={5} {...props} />
))(({ theme }) => ({
  padding: theme.spacing(10, 6),
  [forMobile(theme)]: {
    padding: theme.spacing(6, 8),
  },
}));

export const selectCompClasses = {
  ...generateClasses("SelectComp", ["root"]),
};

export const ActionWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  "& > .MuiTextField-root": {
    flexBasis: "40%",
  },
  [`& > .${selectCompClasses.root}`]: {
    flexBasis: "15%",
  },

  [forMobile(theme)]: {
    flexDirection: "column",
    gap: theme.spacing(5),
    // padding: theme.spacing(0, 4),
    "& > .MuiTextField-root": {
      width: "100%",
    },
    [`& > .${selectCompClasses.root}`]: {
      width: "100%",
    },
  },
}));
export const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: theme.spacing(5),
  [forMobile(theme)]: {
    gridTemplateColumns: "1fr",
  },
  [forTablet(theme)]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
}));
