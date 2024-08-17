import "./Header.css";
import profile from "./assets/profile.svg";
import about from "./assets/about.svg";
import leader from "./assets/leader.svg";
import settings from "./assets/settings.svg";

const Header = () => {
  return (
    <div>
      <div class="header"></div>
      <img src={profile} alt="logo" />
      <img src={about} alt="logo" />
      <img src={leader} alt="logo" />
      <img src={settings} alt="logo" />
    </div>
  );
};

export default Header;
