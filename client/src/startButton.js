import './startButton.css'

const StartBox = ({onClick}) => {
	return (
	<div>
	<button className="startBox" onClick={onClick}>
	   &gt; start...
	</button></div>
	)
}

export default StartBox
