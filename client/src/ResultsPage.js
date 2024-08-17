import ResultsTitle from './ResultsTitle.js'
import Header from './Header.js'
import LeaderboardButton from './LeaderboardButton.js';
import StatSection from './StatSection.js'
import './ResultsPage.css'
import "./leaderboardButton.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

const SubmitScore = () => {
    const [score, setScore] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = {
            score: score,
            username: name,
        };
        fetch("userinfo.json", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(userInfo),
            })
        }

    const navigate = useNavigate()
    let path = '/leaderboard'
    navigate(path);
}

/*
const NameForm = () => {
    return (
        <div class="user-info-form">
            <form onSubmit = {SubmitScore} class="form-text">
                <textarea class="formtext"
                    placeholder="Enter your name here!"
                    type="text"
                    rows="1"
                    value={name}
                    onChange={(event) => setName(event.target.value)}>
                </textarea>
            <ScoreButton onClick={submit}/>
            </form>
        </div>
    )
}

*/

/*<NameForm /> */

const ScoreButton = ({onClick}) => {
  return (
    <div class="scorebutton-cont">
      <button className="leaderbutton">
        &gt; submit your score!
      </button>
    </div>
  );
}

const ResultsPage = () => {
    const location = useLocation()
    const { state } = location;
    const failure = state?.failure;
    const score = state?.score;
    return (
      <div>
        <Header />
        <ResultsTitle />
        <StatSection failure={failure} score={score}/>
        <div class="leader-button">
            <LeaderboardButton /></div>
        </div>
    );
  };

  export default ResultsPage;