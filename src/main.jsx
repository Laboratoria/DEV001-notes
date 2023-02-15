import React from 'react'
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Router, Links, } from "react-router-dom";
import App from './App'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // document.getElementById('root')

)
