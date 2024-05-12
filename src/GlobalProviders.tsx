import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider, useThemeContext } from "./components/Context";
import { CssBaseline, ThemeProvider } from "@mui/material";

const GlobalProviders = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default GlobalProviders;
