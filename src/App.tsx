import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalProviders from "./GlobalProviders";
import HomePage from "./components/HomePage";

function App() {
  return (
    <GlobalProviders>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryId" element={<HomePage />} />
        </Routes>
      </div>
    </GlobalProviders>
  );
}

export default App;
