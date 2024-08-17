import React, { useState, useEffect, useRef } from 'react';
import './TyperrorGame.css';

const TyperrorGame = () => {
    // Example prompts
    const prompts = [
        "prompt 1 hello world",
        "prompt 2 idk",
        "prompt 3 help me"
    ]

const [prompt, setPrompt] = useState("");
const [userInput, setUserInput] = useState("");
const [isCorrect, setIsCorrect] = useState(null);
const [startTime, setStartTime] = useState(null);
const [endTime, setEndTime] = useState(null);
const inputRef = useRef(null);

useEffect(() => {
    // Pick a random prompt
    setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    // Check if the user input matches the prompt
    if (value === prompt) {
      setIsCorrect(true);
      setEndTime(new Date());
    } else if (value.startsWith(prompt)) {
      setIsCorrect(null); // User is still typing
    } else {
      setIsCorrect(false);
    }

    // Start timing when the user begins typing
    if (value.length === 1 && !startTime) {
      setStartTime(new Date());
    }
  };

  const handleRestart = () => {
    setUserInput("");
    setIsCorrect(null);
    setStartTime(null);
    setEndTime(null);
    setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    inputRef.current.focus();
  };

  const elapsedTime = endTime && startTime ? ((endTime - startTime) / 1000).toFixed(2) : null;

  return (
    <div className="typerror-game">
      <div className="prompt">
        <p>{prompt}</p>
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          ref={inputRef}
          disabled={isCorrect === true}
        />
      </div>
      <div className="feedback">
        {isCorrect === true && <p>Correct! Time: {elapsedTime} seconds</p>}
        {isCorrect === false && <p>Incorrect, keep trying...</p>}
      </div>
      {(isCorrect === true || userInput === "") && (
        <button onClick={handleRestart}>Restart</button>
      )}
    </div>
  );
};

export default TyperrorGame;