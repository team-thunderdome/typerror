import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";
import "./GamingPage.css"

const GamingPage = () => {
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
