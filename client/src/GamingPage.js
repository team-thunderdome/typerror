import React, { useEffect, useState } from 'react';

import Title from "./Title.js";
import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"

const GamingPage = () => {
  const [data, setData] = useState(null);

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
        <Codebox />
      </div>
      
      <div id="input-text-box">
        <TextBox />
      </div>
      
    </div>
  );
};

export default GamingPage;
