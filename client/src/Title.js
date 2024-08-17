import "./Title.css";
import logo from "./assets/logo.svg";

const Title = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div class="title">
        <p>type code, race friends, fix erro)rs</p>
      </div>
    </div>
  );
};

export default Title;
