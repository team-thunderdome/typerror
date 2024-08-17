import Icon_time from './assets/timer.svg'
import './Timer.css'
import React from 'react';
import { useNavigate } from "react-router-dom";

const Timer = (props) => {
    let failure = props.failure
    let score = props.score

    console.log(failure)
    console.log(score)

    const [counter, setCounter] = React.useState(10);
    let navigate = useNavigate();
    const ChangePath = () => {
    let path = "/results";
    navigate(path, {state: {failure, score}});
    };

    React.useEffect(() => {
    if (counter == 0) {
        ChangePath()
    }
    
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="timer">
            <div>
            <img className="timer-img" src={Icon_time} alt="logo" />
            </div>
            <div>
                {counter}
            </div>
        </div>
    )
}

export default Timer
