import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage.js"
import GamingPage from "./gamingPage.js"



// we need to route in other pages

function App() {
  return (
	<div>
	<Router>
	<Routes>
	<Route path='/' element={<LandingPage />} />
	<Route path='/gamingPage' element={<GamingPage />} />
	</Routes>
	</Router>
    </div>
  )
}

export default App;
