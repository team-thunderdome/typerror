import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"
import TyperrorGame from "./TyperrorGame.js";

const GamingPage = () => {
  return (
    <div id="content-container">
      <div id="top-menu-bar">
        <Header />
      </div>

      <div className="Game">
        <TyperrorGame />
      </div>
      
    </div>
  );
};

export default GamingPage;

/*
<div id="code-box">
        <Codebox />
      </div>
      
      <div id="input-text-box">
        <TextBox />
      </div>
*/ 
