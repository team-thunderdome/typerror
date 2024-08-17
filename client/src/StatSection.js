import './StatSection.css'

const StatDisplay = (props) => {
    return (
    <div class="statDisplay">
    <p>{props.name}</p>
    <p className="stat">{props.stat}</p>
    </div>
    )
}

const StatSection = (props) => {
    const stat1 = "successes"
    const stat2 = "failures"
    return (
      <div class="stat-section">
        <StatDisplay name={stat1} stat={props.score} />
        <StatDisplay name={stat2} stat={props.failure} />
      </div>
    );
  };

  export default StatSection