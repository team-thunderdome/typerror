import Header from "./Header.js";
import "./Leaderboard.css";

const LeaderBoard = () => {
  return (
    <div className="ldrContainer">
      <Header />
      <table className="ldrTable"></table>
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th>WPM</th>
      </tr>
      <tr>
        <td>1</td>
        <td>John</td>
        <td>100</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Bob</td>
        <td>90</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Joe</td>
        <td>80</td>
      </tr>
    </div>
  );
};

export default LeaderBoard;
