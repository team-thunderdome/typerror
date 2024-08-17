import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.js";
import GamingPage from "./GamingPage.js";
import ResultsPage from "./ResultsPage.js";
import LeaderBoard from "./Leaderboard.js";
import InfoPage from "./InfoPage.js";
import SettingsPage from "./SettingsPage.js";
import ProfilePage from "./ProfilePage.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/game" element={<GamingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
