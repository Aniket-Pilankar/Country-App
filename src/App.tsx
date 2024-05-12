import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalProviders from "./GlobalProviders";
import HomePage from "./components/HomePage";
import { ThemeContextProvider } from "./components/Context";
import Topbar from "./shared-components/AppBar";

function App() {
  return (
    <GlobalProviders>
      <div className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<HomePage />} />
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
