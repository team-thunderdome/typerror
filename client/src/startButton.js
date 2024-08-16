import './startButton.css'
import { useNavigate } from 'react-router-dom';

// THIS SHOULD PROBABLY DO SOMETHING > ROUTE GAMINGPAGE
const StartButton = ({onClick}) => {
	let navigate = useNavigate();
	const ChangePath = () => {
	let path = '/gamingPage'
	navigate(path)
	}
	return (
	<div>
	<button className="startButton" onClick={ChangePath}>
	   &gt; start...
	</button></div>
	)
}

export default StartButton
