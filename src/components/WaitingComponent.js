import loading from '../loading.gif';

function WaitingPage(){
    return(
        <div id="loading-root">
            <img className="loading-gif" src = {loading}/>
            <span className="firstTitle">This may take several minutes...</span>
            <span className="firstTitle">If you’d like we can e-mail you the result</span>
            <div className="input-field">
                <input type="email" placeholder="Enter your email here"></input>
            </div>
            <span id="description" className="description">We won’t store or send you any other e-mail whatsoever</span>
        </div>
    )
}


export default WaitingPage;