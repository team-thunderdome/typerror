import "./LeaderboardTitle.css";
import icon_schedule from "./assets/leader.svg";

const LeaderboardTitle = () => {
  return (
    <div class="icon-text">
      <div class="image">
        <img class="image" src={icon_schedule} alt="graph" />
      </div>
      <div class="title">
        <p>leaderboard</p>
      </div>
    </div>
  );
};

export default LeaderboardTitle;
