import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import WaitingComponent from '../components/WaitingComponent'

import axios from 'axios'

function Homepage(){
    const [inputValue, setText ] = useState('')
    const [ loading, setLoading ] = useState(true)
    let history = useHistory()

    const submitHandler = (e)=>{
      
        axios.get("https://chess-time-calculator.herokuapp.com/chesscom/" + [inputValue]).then(response =>{
            console.log(response)
            history.push({
                pathname: '/completed',
                state: response.data
            })
            setLoading(true)
        }
        ).catch(err =>{
            setLoading(false)
            console.log(err)
        })
  
        //send to the next page
        console.log("clicked")
        setLoading(true)

    }
    
    return (
      <div id="homepage-container">
        <div id="homepage-title" className="title-container">
            <span className="big-title">HOW MUCH TIME HAVE I SPENT ON</span>
            <img id="chess-logo" src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpZA7QOK.png"/>
        </div>
  
        <div className="input-field" id="homepage-input">
            <input className="" placeholder="Enter your username" onChange={ e => setText(e.target.value) }></input>
        </div>
        <button onClick={submitHandler} id="submit-button" className="pushable">
            <span className="front">
            SUBMIT
            </span>
        </button>

        { loading && <WaitingComponent/> }
      </div>
    );
}

export default Homepage;