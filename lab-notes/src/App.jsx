import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'


function App() {
  return (
        <Routes>
          <Route path="/Login" element= {<Login/>} />
          <Route path="/Register" element= {<Register />}/>
          <Route path="/" element= {<Home />} />
        </Routes>
 
  )
}


export default App
