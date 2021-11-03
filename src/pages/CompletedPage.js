// import { TwitterShareButton } from 'react-twitter-embed'
import { RedditShareButton, RedditIcon, TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share'

function CompletedPage(props){

    const value = props.totalTime

    let time = {
        days : 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    // let days = value / (3600 * 24)
    // let hours = (days - parseInt(days)) * 24
    let hours = value / 3600
    let minutes = (hours - parseInt(hours)) * 60
    let seconds = (minutes - parseInt(minutes)) * 60

    // time.days = parseInt(days)
    time.hours = parseInt(hours)
    time.minutes = parseInt(minutes)
    time.seconds = parseInt(seconds)




    return(
        <div id='loading-root'>
            <span className="big-title long">{ props.user } have spent:</span>

            <div className="firstTitle horizontal-div" >
                {time.days > 0 && (<span > {time.days} days</span>) }

                {time.hours > 0 && (<span> {time.hours} hours</span>) }

                {time.minutes > 0 && <span> {time.minutes} minutes</span> }
                
                {time.seconds > 0 && <span> and {time.seconds} seconds</span> }
                <span> in the game </span>
            </div>
            
            <div className="description share-container">
            <span className="share-title">Share on Social Media</span>
                <div className="share-buttons-container">
                    <TwitterShareButton
                        className="twitter-share"
                        url={`https://www.chess.com/member/${ props.user  }`}
                        title={`${ props.user } Have ${ parseInt(props.totalTime/3600) } Hours in Matches Played on Chess.com\n\n`}
                        via="chesscom"
                    >
                        <TwitterIcon
                          size={45}
                        />
                    </TwitterShareButton>

                    <RedditShareButton
                        className="reddit-share"
                        url={`https://www.chess.com/member/${ props.user }`}
                        title={`${ props.user} Have ${ parseInt(props.totalTime/3600) } Hours in Matches Played on Chess.com\n\n`}
                        about="chess"
                    >
                        <RedditIcon
                          size={45}  
                        />
                    </RedditShareButton>

                    <FacebookShareButton
                        className="facebook-share"
                        url={`https://www.chess.com/member/${ props.user  }`}
                        quote={`${ props.user } Have ${ parseInt(props.totalTime/3600) } Hours in Matches Played on Chess.com\n\n`}
                    >
                        <FacebookIcon
                          size={45}  
                        />
                    </FacebookShareButton>
                </div>
            </div>

                <button onClick={props.onNext} id="submit-button" className="pushable">
                    <span className="front">
                    BACK
                    </span>
                </button>
            
            
        </div>
    )
}


export default CompletedPage;