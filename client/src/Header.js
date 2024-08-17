import "./Header.css";
import profile from "./assets/profile.svg";
import about from "./assets/about.svg";
import leader from "./assets/leader.svg";
import settings from "./assets/settings.svg";
import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <div class="header">
      <div class="main-logo">
        <img src={logo} alt="logo" />
      </div>
      <div class="logos">
        <img src={profile} alt="logo" />
        <img src={about} alt="logo" />
        <img src={leader} alt="logo" />
        <img src={settings} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
