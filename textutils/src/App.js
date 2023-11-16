import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/about';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';







function App() {
  const [mode, setMode]= useState('light') //whether dark mode is enabled or not
  useEffect(()=>{
    setMode('light')
}, [])

const [alert,setAlert]= useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(()=>{
    setAlert(null)
  }, 1500)
}

const toggleMode=()=>{
  if(mode === 'light')
  {
    setMode('dark')
    document.body.style.backgroundColor='grey'
    showAlert("Dark mode has been enabled", "success")          //showAlert(message, type) //passing
    document.title='TextUtils- Dark Mode'
    // setInterval(()=>{
    //   document.title="TextUtils is Amazinng"
    // },1000)
    // setInterval(()=>{
    //   document.title="Install text utils now"
    // },1500)
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success")          //showAlert(message, type) //passing

    document.title='TextUtils- Light Mode'
  }
}

const toggleModeRed=()=>{
  if(mode === 'light')
  {
    setMode('red')
    document.body.style.backgroundColor='red'
    showAlert("Red mode has been enabled", "success")          //showAlert(message, type) //passing
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled", "success")          //showAlert(message, type) //passing
  }
  

  


}
  return (
    <>
 {/* <Router>  */}
<Navbar title="TEXT UTILS " mode={mode}  toggleMode={toggleMode} toggleModeRed={toggleModeRed}/>
<Alert alert={alert}/>
<div className="container" my3>
{/* <Switch>
          <Route exact path="/about">
           
          </Route>
          <Route exact path="/">       */}
          {<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> }
         
          {/* /* </Route>
        </Switch> */ }
       
      
</div>
{/* </Router> */}
    </>
  
  );
}

export default App;
