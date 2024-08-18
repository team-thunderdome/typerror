import ResultsTitle from "./ResultsTitle.js";
import Header from "./Header.js";
import LeaderboardButton from "./LeaderboardButton.js";
import StatSection from "./StatSection.js";
import BackButton from "./BackButton.js"


import "./ResultsPage.css";
import "./leaderboardButton.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NameForm = (props) => {
  let { score: totalscore } = props;
  const [score, setScore] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setScore(totalscore);
  }, [totalscore]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInfo = {
      username: name,
      score: score,
    };

    const response = await fetch("http://localhost:3001/leaderboardScores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    let path = "/leaderboard";
    navigate(path);
  };

  return (
    <div class="user-info-form">
      <form onSubmit={handleSubmit} class="form-text">
        <textarea
          class="formtext"
          placeholder="Enter your name here!"
          type="text"
          rows="1"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></textarea>
        <ScoreButton class="scoreButton" type="submit" />
      </form>
    </div>
  );
};

const ScoreButton = ({ onClick }) => {
  return (
    <div class="scorebutton-cont">
      <button className="leaderbutton">&gt; submit your score!</button>
    </div>
  );
};

const ResultsPage = () => {
  const location = useLocation();
  const { state } = location;
  const failure = state?.failure;
  const score = state?.score;
  let totalscore = 0;
  if (failure > score) {
    totalscore = 0;
  } else {
    totalscore = score - failure;
  }

  return (
    <div id="content-container">
      <div id="header"><Header /></div>
      <div class="main-content-item" id="results-title"><ResultsTitle /></div>
      <div class="main-content-item" id="stats-section"><StatSection failure={failure} score={score} /></div>
      <div class="main-content-item" id="name-form"><NameForm score={totalscore} /></div>
      <div class="main-content-item leader-button"><LeaderboardButton /></div>
      <div class="main-content-item"><BackButton /></div>
    </div>
  );
};

export default ResultsPage;
