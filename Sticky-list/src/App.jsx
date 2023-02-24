import {Fragment} from 'react';
import './App.css';
import React from 'react';
import Muro from './Componentes/Muro';
import Inicio from './Componentes/Inicio';

function App() {
  return (
    <Fragment id="contenedor">

      <Inicio/>
      <Muro/>
    </Fragment>

  );
}
/* function Apps() {
  return (

  );
} */

export {App};
