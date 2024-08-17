import "./ResultsTitle.css";
import icon_schedule from "./assets/Icon_schedule.svg";

const ResultsTitle = () => {
  return (
    <div class="icon-text">
      <div class="image">
        <img class="image" src={icon_schedule} alt="graph" />
      </div>
      <div class="title">
        <p>results</p>
      </div>
    </div>
  );
};

export default ResultsTitle;
