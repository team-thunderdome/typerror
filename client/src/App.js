import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import GamingPage from "./GamingPage.js";
import ResultsPage from "./ResultsPage.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamingpage" element={<GamingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
