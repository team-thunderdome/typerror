import "./InfoTitle.css";
import about from "./assets/about.svg";

const InfoTitle = () => {
  return (
    <div class="icon-text">
      <div class="image">
        <img class="image" src={about} alt="questionMark" />
      </div>
      <div class="title">
        <p>info</p>
      </div>
    </div>
  );
};

export default InfoTitle;
