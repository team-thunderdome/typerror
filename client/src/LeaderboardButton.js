import "./leaderboardButton.css";
import { useNavigate } from "react-router-dom";

// routeleaderboard
const LeaderboardButton = ({ onClick }) => {
  let navigate = useNavigate();
  const ChangePath = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <div>
      <button className="leaderButton" onClick={ChangePath}>
        &gt; view leaderboards
      </button>
    </div>
  );
};

export default LeaderboardButton
