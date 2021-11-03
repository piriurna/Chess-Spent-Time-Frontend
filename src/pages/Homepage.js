import { useState } from 'react'
import axios from 'axios'
import WaitingComponent from '../components/WaitingComponent'
import { HomepageComponent } from '../components/HomePageComponent';
import CompletedPage from './CompletedPage';

function Homepage(){
    const [ loading, setLoading ] = useState(false)
    const [inputValue, setText ] = useState('')
    const [completed, setCompleted] = useState(false)
    const [user, setUser] = useState('')
    const [ totalTime, setTotalTime ] = useState(0)

    const submitHandler = (e)=>{
      
        axios.get("https://chess-time-calculator.herokuapp.com/chesscom/" + [inputValue]).then(response =>{
            console.log(response)
            setUser(inputValue)
            setTotalTime(response.data.totalTime)
            setCompleted(true)
            setLoading(false)
            console.log(`loading: ` + loading)
            console.log(`completed: ` + completed)
        }
        ).catch(err =>{
            setLoading(false)
            setCompleted(false)
            console.log(`loading: ` + loading)
            console.log(`completed: ` + completed)
            console.log(err)
        })
  
        //send to the next page
        console.log(`loading: ` + loading)
        console.log(`completed: ` + completed)
        setLoading(true)
        setCompleted(false)

    }

    return (
      <div id="homepage-container">
        {(!loading && !completed) && <HomepageComponent onNext={ submitHandler } setText={(text)=>{ setText(text) }}/>} 
        {(loading && !completed) && <WaitingComponent   /> }
        {completed && <CompletedPage user={user} totalTime={totalTime} onNext={ () => setCompleted(false) }/>}
      </div>
    );
}

export default Homepage;