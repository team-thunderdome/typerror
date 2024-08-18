import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import Header from "./Header.js";
import LeaderboardTitle from "./LeaderboardTitle.js";
import BackButton from "./BackButton.js";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("http://localhost:3001/leaderboardScores")
      .then((response) => response.json())
      .then((data) => {
        setScores(data.sort((a, b) => b.score - a.score))
      })
      .catch((error) => console.error("Error fetching the scores:", error));
  }, []);

  return (
    <div className="ldrContainer">
      <div className="header-container">
        <Header />
      </div>
      <LeaderboardTitle />
      <div id="back-button"><BackButton /></div>
      <table className="ldrTable">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>score</th>
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
