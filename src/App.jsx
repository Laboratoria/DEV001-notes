// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { React } from "react";
// import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './App.css'
// import { createBrowserRouter, RouterProvider, Route, Link,} from "./componentes/Home";

const 
function App(){
  return (
    <div className="App">
      <Routes>
        <Route path= '/' element={<Bienvenida />} />
        <Route path= '/inicio-sesion' element={<Home />} />
      </Routes>
        
    </div>
  )
}

export default App