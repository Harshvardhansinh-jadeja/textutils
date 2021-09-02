import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  
const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#2a365c'
    showAlert("Dark mode Enabled","success")
    document.title = 'TextUtils - Dark mode'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode Enabled","success")
    document.title = 'TextUtils - light mode'

  }
}

const yellowMode = ()=>{
  if(mode=== 'light'){
    setMode('yelow')
    document.body.style.backgroundColor = '#005214'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
  }
}
const [mode,setMode] = useState('light')
const [alert, setAlert] = useState(null)

const showAlert = (message,type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} yellowMode={yellowMode} ></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
      <TextForm showAlert={showAlert} mode={mode} heading="Word Counter, Character Counter, remove Extra Spaces"/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App; 
