import StartButton from "../components/StartButton.js";
import Title from "../components/Title.js";
import Header from "../components/Header.js";

const LandingPage = () => {
  return (
    <div
      style={
        {
          /* backgroundColor: '#F7E7CB' */
        }
      }
    >
      <Header />
      <Title />
      <StartButton />
    </div>
  );
};
export default LandingPage;
