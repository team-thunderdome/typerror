import React, { useEffect, useState } from 'react';

import Title from "./InfoTitle.js";
import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"

const max_prompt_index = 1; /* from 0 indexing i.e., if there are 2 prompts then max_prompt_index is 1 */

const GamingPage = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(''); 
  const [currentPromptIndex, setPromptIndex] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
    if (data && inputValue === data.level_1[currentPromptIndex].answer) {
      if (currentPromptIndex < max_prompt_index) {
        setPromptIndex(prevIndex => prevIndex + 1); 
      }
      setInputValue(''); 
    }
  };

  useEffect(() => {
    fetch('/../CodePrompt.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return (<div>Loading...</div>)
  }

  return (
    <div id="content-container">
      <div id="top-menu-bar">
        <Header />
      </div>
      <div id="code-box">
        <Codebox text={data.level_1[currentPromptIndex].prompt}/>
      </div>
      <div id="input-text-box">
        <TextBox value={inputValue} onChange={handleInputChange} />
      </div>
    </div>
  );
  /* route here to go to next page */
};

export default GamingPage;
