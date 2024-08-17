import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import GamingPage from "./GamingPage.js";
import ResultsPage from "./ResultsPage.js";
import LeaderBoard from "./Leaderboard.js";

// we need to route in other pages

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamingpage" element={<GamingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
