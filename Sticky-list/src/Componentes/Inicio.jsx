import React from 'react';
import {registroGoogle} from '../../Firebase/Dependencias';
import {useNavigate} from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();
  const validarClick = () => {
    registroGoogle().then((resolve)=>{
      navigate('/muro');
    });
  };
  return (
    <div>
      <h1 id='tituloInicio'>Sticky List</h1>
      <img id='logoSticky'src="/imagenes/logo.png"></img>
      <h2>Bienvenid@!</h2>
      <p>¿Qué historias increíbles has visto últimamente?</p>
      <button className="login" id='btnLogin' onClick={validarClick} type="button">
        Iniciar sesión con Google</button>
    </div>
  );
};
export default Inicio;
