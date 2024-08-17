import "./SettingsTitle.css";
import settings from "./assets/settings.svg";

const SettingsTitle = () => {
  return (
    <div class="icon-text">
      <div class="image">
        <img class="image" src={settings} alt="settings" />
      </div>
      <div class="title">
        <p>settings</p>
      </div>
    </div>
  );
};

export default SettingsTitle;
