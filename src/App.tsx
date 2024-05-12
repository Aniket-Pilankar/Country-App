import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalProviders from "./GlobalProviders";
import HomePage from "./components/HomePage";
import Topbar from "./shared-components/AppBar";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <GlobalProviders>
      <div className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<CountryDetails />} />
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
