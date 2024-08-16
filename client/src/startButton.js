import './startButton.css'

// THIS SHOULD PROBABLY DO SOMETHING > ROUTE GAMINGPAGE
const StartButton = ({onClick}) => {
	return (
	<div>
	<button className="startButton" onClick={onClick}>
	   &gt; start...
	</button></div>
	)
}

export default StartButton
