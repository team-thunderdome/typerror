import ResultsTitle from './ResultsTitle.js'
import Header from './Header.js'
import LeaderboardButton from './LeaderboardButton.js';
import StatSection from './StatSection.js'

const ResultsPage = () => {
    return (
      <div
        style={
          {
            /* backgroundColor: '#F7E7CB' */
          }
        }
      >
        <Header />
        <ResultsTitle />
        <StatSection />
        <LeaderboardButton />
      </div>
    );
  };

  export default ResultsPage;