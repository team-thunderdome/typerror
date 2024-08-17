import "./Header.css";

import profile from "./assets/profile.svg";
import about from "./assets/about.svg";
import leader from "./assets/leader.svg";
import settings from "./assets/settings.svg";
import logo from "./assets/logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="Home" />
        </Link>
        <Link to="/profile">
          <img src={profile} alt="Profile" className="nav-image" />
        </Link>
        <Link to="/about">
          <img src={about} alt="About" className="nav-image" />
        </Link>
        <Link to="/leader">
          <img src={leader} alt="Leader" className="nav-image" />
        </Link>
        <Link to="/settings">
          <img src={settings} alt="Settings" className="nav-image" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
