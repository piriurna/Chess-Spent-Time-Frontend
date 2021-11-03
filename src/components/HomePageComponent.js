



export function HomepageComponent(props){



    return(
        <div id="homepage-container">
            <div id="homepage-title" className="title-container">
                <span className="big-title">HOW MUCH TIME HAVE I SPENT ON</span>
                <img id="chess-logo" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png"/>
            </div>
    
            <div className="input-field" id="homepage-input">
                <input className="" placeholder="Enter your username" onChange={ e => props.setText(e.target.value) }></input>
            </div>
            <button onClick={props.onNext} id="submit-button" className="pushable">
                <span className="front">
                SUBMIT
                </span>
            </button>
      </div>
    )
}