import logo from "./assets/logo.svg";
import TextBox from "./TextBox.js";
import Header from "./Header.js";
import Codebox from "./Codebox.js";

const GamingPage = () => {
  return (
    <div
      style={
        {
          /* backgroundColor: '#F7E7CB' */
        }
      }
    >
      <Header />
      <Codebox />
      <TextBox />
    </div>
  );
};

export default GamingPage;
