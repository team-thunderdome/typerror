import React, { useEffect, useState } from 'react';

import Title from "./InfoTitle.js";
import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"

const max_prompt_index = 2; /* from 0 indexing i.e., if there are 2 prompts then max_prompt_index is 1 */

const GamingPage = () => {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState(''); 
  const [current_prompt_index, set_prompt_index] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
    if (data && inputValue === data.level_1[current_prompt_index].answer) {
      set_prompt_index(prevIndex => prevIndex + 1); 
      setInputValue(''); 
    }
    // if (data && inputValue === data.level_1[current_prompt_index].answer) {
    //   if (current_prompt_index <= max_prompt_index) {
    //     setData("You're all finished!")
    //   } else {
    //     set_prompt_index(prevIndex => prevIndex + 1); 
    //   }
    //   setInputValue(''); 
    // }
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
      <div>Current prompt = {current_prompt_index}</div>
      <div id="top-menu-bar">
        <Header />
      </div>
      <div id="code-box">
        <Codebox text={data.level_1[current_prompt_index].prompt}/>
      </div>
      <div id="input-text-box">
        <TextBox value={inputValue} onChange={handleInputChange} />
      </div>
    </div>
  );
  /* route here to go to next page */
};

export default GamingPage;
