import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import Header from "./Header.js";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/leaderboardScores.json")
      .then((response) => response.json())
      .then((data) => setScores(data))
      .catch((error) => console.error("Error fetching the scores:", error));
  }, []);

  return (
    <div className="ldrContainer">
      <div className="header-container">
        <Header />
      </div>
      <table className="ldrTable">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.username}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
