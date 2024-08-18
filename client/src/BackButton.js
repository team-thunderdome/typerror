import "./BackButton.css";
import { useNavigate } from "react-router-dom";

// routeleaderboard
const BackButton = ({ onClick }) => {
    let navigate = useNavigate();
    const ChangePath = () => {
      let path = "/game";
      navigate(path);
    };
    return (
      <div>
        <button id="backButton" onClick={ChangePath}>
          &gt; play again?
        </button>
      </div>
    );
  };

  export default BackButton