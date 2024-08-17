import './StatSection.css'

const StatDisplay = (props) => {
    return (
    <div class="statDisplay">
    <p>{props.name}</p>
    <p className="stat">{props.stat}</p>
    </div>
    )
}

const StatSection = () => {
    const stat1 = "WPM"
    const stat2 = "errors"
    const stat3 = "test"
    const stat4 = "test2"
    const statWPM = 383
    const statErrors = 12
    const statGeneric = 9495
    const statGeneric2 = 839
    return (
      <div class="stat-section">
        <StatDisplay name={stat1} stat={statWPM} />
        <StatDisplay name={stat2} stat={statErrors} />
        <StatDisplay name={stat3} stat={statGeneric} />
        <StatDisplay name={stat4} stat={statGeneric2} />
      </div>
    );
  };

  export default StatSection