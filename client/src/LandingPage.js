import "./landingPage.css";
import StartButton from "./StartButton.js";
import Title from "./Tagline.js";
import Header from "./Header.js";
import logo from "./assets/logo.svg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-container">
        <Header />
      </div>

      <div className="title-container">
        <img src={logo} alt="logo" className="logo" />
        <Title />
      </div>

      <div className="start-container">
        <StartButton />
      </div>
    </div>
  );
};

export default LandingPage;
