import './App.css';
import Homepage  from './pages/Homepage';
import CompletedPage from './pages/CompletedPage';
import { Route, Switch } from 'react-router-dom'

// const submitHandler = (e)=>{
//       // axios.get("http://localhost:8000/chesscom/francozalamena")
//       console.log("clicked")
// }



function App() {

  return(
    <div>
      <Route path="/" exact={true}>
        <Homepage/>
      </Route>
      <Route path="/completed">
        <CompletedPage/>
      </Route>
    </div>
  )
}

export default App;
