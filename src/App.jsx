// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { React } from "react";
// // import { createRoot } from "react-dom/client";
import { Routes, Route, } from "react-router-dom";
// import Home from "./componentes/Home";
import Login from "./componentes/LogIn";
import Notes from "./componentes/Notes";



function App () {
  return(
<div className = "App">
      <div>
    <Routes>
      <Route path= '/' element={<Login />}exact />
      <Route path= '/notes' element={<Notes />}exact />
    </Routes>
      </div>
</div>
  ) 
}
export default App;