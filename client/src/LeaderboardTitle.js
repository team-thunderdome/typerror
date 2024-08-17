import "./ResultsTitle.css";
import icon_schedule from "./assets/history.svg";

const ResultsTitle = () => {
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

export default ResultsTitle;
