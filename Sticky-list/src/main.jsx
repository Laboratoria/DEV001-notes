import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Muro from './Componentes/Muro';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio/>,
  },
  {
    path: '/muro',
    element: <Muro/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
);
