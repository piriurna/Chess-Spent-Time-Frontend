import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

function WaitingPage(){

    const location = useLocation();

    const value = location.state.totalTime

    console.log(location.state)

    let time = {
        days : 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    let days = value / (3600 * 24)
    let hours = (days - parseInt(days)) * 24
    let minutes = (hours - parseInt(hours)) * 60
    let seconds = (minutes - parseInt(minutes)) * 60

    time.days = parseInt(days)
    time.hours = parseInt(hours)
    time.minutes = parseInt(minutes)
    time.seconds = parseInt(seconds)




    return(
        <div id="root">
            <span className="big-title">You have spent:</span>
            <div className="firstTitle horizontal-div" >
                {time.days > 0 && (<span > {time.days} days</span>) }

                {time.hours > 0 && (<span> {time.hours} hours</span>) }

                {time.minutes > 0 && <span> {time.minutes} minutes</span> }
                
                {time.seconds > 0 && <span> and {time.seconds} seconds</span> }
                <span> in the game </span>
            </div>

            <Link to='/'>
                <button id="submit-button" className="pushable">
                    <span className="front">
                    BACK
                    </span>
                </button>
            </Link>
            
        </div>
    )
}


export default WaitingPage;