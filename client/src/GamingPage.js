import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import Title from "./InfoTitle.js";
import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import Timer from "./Timer.js";
import skip from "./assets/skip.svg"
import './LeaderboardButton.js'
import "./GamingPage.css"

const GamingPage = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(''); 
  const [currentPromptIndex, setPromptIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [failure, setFailure] = useState(0);
  const [codeBoxPlaceHolder, setPlaceholderValue] = useState("Type the correct syntax here!");

  const handleInputChange = (event) => {
    const value = event.target.value; 
    setInputValue(value); 
    if (data && value === data.items[currentPromptIndex].answer) {
      setPromptIndex(Math.floor(Math.random() * data.items.length)); 
      setInputValue('');
      setScore(score + 1);
      setPlaceholderValue('');
    }
  };

  useEffect(() => {
    fetch('/../CodePrompt.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Set a random index once data is loaded
  useEffect(() => {
    if (data && data.items.length > 0) {
      setPromptIndex(Math.floor(Math.random() * data.items.length));
    }
  }, [data]);

  if (!data) {
    return (<div>Loading...</div>)
  }

  // Skip functionality - get new prompt
  function handleClick() {
    setFailure(failure + 1);
    setPromptIndex(Math.floor(Math.random() * data.items.length));
    if (score > 0) {
      setScore(score - 1)
    }
    setInputValue('')
  }

  // Call same thing above if clicked
  const SkipButton = ({ onClick }) => {
    return (
      <div>
        <img class="skip-button" src={skip} onClick={handleClick} style={{"pointer-events": "all"}} />
      </div>
    );
  };

  return (
    <div id="content-container">
      <div id="top-menu-bar">
        <Header />
      </div>
      <div id="score-counter">
        Score: {score}
      </div>
      <div id="code-box">
        <Codebox text={data.items[currentPromptIndex].prompt}/>
      </div>
      <div id="input-text-box">
        <TextBox value={inputValue} placeholder={codeBoxPlaceHolder} onChange={handleInputChange} />
      </div>
      <div id="skip-button-box">
        <SkipButton />
      </div>
      <div id="timer-box">
        <Timer failure={failure} score={score}/>
      </div>
    </div>
  );
  /* route here to go to next page */
};

export default GamingPage;
